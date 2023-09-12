import { Reference } from '@components/References';
import { prisma } from '@db/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { boolean, InferType, number, object, string, ValidationError } from 'yup';

const allowedMethods = ['POST', 'GET', 'PUT', 'DELETE'];

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
  slug: string().nullable(),
});

type FormValue = InferType<typeof formSchema>;

const parseBody = (req: NextApiRequest) => (typeof req.body === 'object' ? req.body : JSON.parse(req.body));

const validatePayload = async (body: any): Promise<FormValue> => {
  const normalizedBody = {
    ...body,
    orderId: !isNaN(body.orderId) ? +body.orderId : 0,
    locationLat: !isNaN(body.locationLat) ? +body.locationLat : 0,
    locationLong: !isNaN(body.locationLong) ? +body.locationLong : 0,
  };

  const payload: FormValue = await formSchema.validate(normalizedBody);

  const {
    id,
    partnerName,
    projectName,
    city,
    img,
    description,
    orderId,
    isPublic,
    startedAt,
    endedAt,
    locationLat,
    locationLong,
  } = payload;

  const newItem = {
    id: id ?? undefined,
    partnerName,
    projectName,
    city,
    img,
    description,
    orderId,
    isPublic,
    startedAt,
    endedAt,
    locationLat,
    locationLong,
  };

  return newItem;
};

export const handler = async (
  req: NextApiRequest,
  // FIXME: Types
  // res: NextApiResponse<{ error?: string | object; msg?: string } | Partial<Reference>[] | Partial<Reference>>
  res: NextApiResponse<{ error?: string | object; msg?: string } | Partial<Reference>[] | Partial<Reference> | any>
) => {
  if (!allowedMethods.includes(req.method ?? '') || req.method == 'OPTIONS') {
    return res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }

  const { param } = req.query;
  const itemId = param?.[0] as string;
  const isSoloItemRequest = !!itemId;

  if (req.method === 'GET') {
    if (isSoloItemRequest) {
      try {
        const project = await prisma.project.findUnique({ where: { id: itemId } });
        console.log('Loaded project:', project?.id);

        res.status(200).json(project);
      } catch (error) {
        console.error(error);
        if (error?.response) {
          console.error(error.response.body);
        }

        res.status(500).json({ msg: 'Error loading project' + JSON.stringify(req.query) });
      }
      return;
    }

    try {
      const projects = await prisma.project.findMany({ orderBy: { orderId: { sort: 'asc' } } });
      console.log('Loaded projects:', projects?.length);

      res.status(200).json(projects);
    } catch (error) {
      console.error(error);
      if (error?.response) {
        console.error(error.response.body);
      }

      res.status(500).json({ msg: 'Error loading projects' });
    }
  } else if (req.method === 'PUT') {
    const body = parseBody(req);

    // FIXME: typing (FormValue)
    let newItem;
    try {
      newItem = await validatePayload(body);
    } catch (validationError: unknown) {
      console.log('Validation failed:', validationError);

      return res.status(400).json({
        error: (validationError as ValidationError).errors,
      });
    }

    try {
      const response = await prisma.project.update({ where: { id: newItem.id }, data: newItem });
      console.log(response);
      res.status(200).json({ msg: 'Project updated successfully' });
    } catch (error) {
      console.error(error);
      if (error?.response) {
        console.error(error.response.body);
      }

      res.status(500).json({ msg: 'Error processing payload' });
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
    const body = parseBody(req);

    // FIXME: typing (FormValue)
    let newItem;
    try {
      newItem = await validatePayload(body);
    } catch (validationError: unknown) {
      console.log('Validation failed:', validationError);

      return res.status(400).json({
        error: (validationError as ValidationError).errors,
      });
    }

    try {
      const response = await prisma.project.create({ data: newItem });
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
