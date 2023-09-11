import type { NextApiRequest, NextApiResponse } from 'next';
import { boolean, date, InferType, number, object, string, ValidationError } from 'yup';
import { Reference } from '../../../components/References';
import { prisma } from '../../../server/db/client';

const allowedMethods = ['POST', 'GET', 'DELETE'];

const formSchema = object({
  id: string(),
  partnerName: string().required(),
  city: string().required(),
  img: string().required(),
  projectName: string().required(),
  description: string().required(),
  orderId: number(),
  isPublic: boolean().default(false),
  startedAt: string(),
  endedAt: string(),
  locationLat: number(),
  locationLong: number(),
  slug: string(),
});

type FormValue = InferType<typeof formSchema>;

export const handler = async (
  req: NextApiRequest,
  // FIXME: Types
  // res: NextApiResponse<{ error?: string | object; msg?: string } | Partial<Reference>[] | Partial<Reference>>
  res: NextApiResponse<{ error?: string | object; msg?: string } | Partial<Reference>[] | Partial<Reference> | any>
) => {
  if (!allowedMethods.includes(req.method ?? '') || req.method == 'OPTIONS') {
    return res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }

  if (req.method === 'GET') {
    try {
      const projects = await prisma.project.findMany();
      console.log('Loaded projects:', projects?.length);

      res.status(200).json(projects);
    } catch (error) {
      console.error(error);
      if (error?.response) {
        console.error(error.response.body);
      }

      res.status(500).json({ msg: 'Error loading projects' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const id = req.body?.id;
      const project = await prisma.project.delete({ where: { id } });

      res.status(200).json({ project });
    } catch (error) {
      console.error(error);
      if (error?.response) {
        console.error(error.response.body);
      }

      res.status(500).json({ msg: `Error deleting project with ID: ${req.body?.id}` });
    }
  } else if (req.method === 'POST') {
    const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
    const normalizedBody = {
      ...body,
      orderId: !isNaN(body.orderId) ? +body.orderId : 0,
      locationLat: !isNaN(body.locationLat) ? +body.locationLat : 0,
      locationLong: !isNaN(body.locationLong) ? +body.locationLong : 0,
    };

    let payload: FormValue;
    try {
      payload = await formSchema.validate(normalizedBody);
    } catch (validationError: unknown) {
      console.log('Validation failed:', validationError);

      return res.status(400).json({
        error: (validationError as ValidationError).errors,
      });
    }

    const {
      partnerName,
      city,
      img,
      projectName,
      description,
      orderId,
      isPublic,
      startedAt,
      endedAt,
      locationLat,
      locationLong,
    } = payload;

    const lat = !isNaN(locationLat) ? +locationLat : 0;
    const long = !isNaN(locationLong) ? +locationLong : 0;

    console.log('lat/long:', lat, long);

    try {
      const response = await prisma.project.create({
        data: {
          city,
          partnerName,
          img,
          projectName,
          description,
          orderId,
          isPublic,
          startedAt,
          endedAt,
          locationLat,
          locationLong,
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
