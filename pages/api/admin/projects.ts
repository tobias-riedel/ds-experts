import type { NextApiRequest, NextApiResponse } from 'next';
import { InferType, object, string, ValidationError } from 'yup';
import { Reference } from '../../../components/References';
import { prisma } from '../../../server/db/client';

const allowedMethods = ['POST', 'GET'];

const formSchema = object({
  partnerName: string().required(),
  city: string().required(),
  img: string().required(),
  projectName: string().required(),
  description: string().required(),
});

type FormValue = InferType<typeof formSchema>;

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ error?: string | object; msg?: string } | Reference[]>
) => {
  if (!allowedMethods.includes(req.method ?? '') || req.method == 'OPTIONS') {
    return res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }

  if (req.method === 'GET') {
    try {
      const references = await prisma.project.findMany();
      console.log('Loaded references:', references?.length);

      res.status(200).json(references);
    } catch (error) {
      console.error(error);
      if (error?.response) {
        console.error(error.response.body);
      }

      res.status(500).json({ msg: 'Error loading projects' });
    }
  } else if (req.method === 'POST') {
    const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
    let payload: FormValue;
    try {
      payload = await formSchema.validate(body);
    } catch (validationError: unknown) {
      console.log('Validation failed:', validationError);

      return res.status(400).json({
        error: (validationError as ValidationError).errors,
      });
    }

    const { partnerName, city, img, projectName, description } = payload;

    try {
      const response = await prisma.project.create({
        data: {
          city,
          partnerName,
          img,
          projectName,
          description,
        },
      });
      console.log(response);
      res.status(200).json({ msg: 'Project added successfully' });
    } catch (error) {
      console.error(error);
      if (error?.response) {
        console.error(error.response.body);
      }

      res.status(500).json({ msg: 'Error processing payload' });
    }
  }
};

export default handler;
