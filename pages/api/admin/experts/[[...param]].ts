import { prisma } from '@db/client';
import { Expert } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { boolean, InferType, number, object, string, ValidationError } from 'yup';
import { getServerAuthSession } from '@server/common/get-server-auth-session';

const allowedMethods = ['POST', 'GET', 'PUT', 'DELETE'];

const formSchema = object({
  id: string(),
  firstName: string().required(),
  lastName: string().required(),
  role: string().required(),
  img: string(),
  startedAt: string().required(),
  endedAt: string(),
  isPublic: boolean().default(false),
  orderId: number(),
  slug: string().nullable(),
});

type FormValue = InferType<typeof formSchema>;

const parseBody = (req: NextApiRequest) => (typeof req.body === 'object' ? req.body : JSON.parse(req.body));

const validatePayload = async (body: FormValue): Promise<FormValue> => {
  const payload: FormValue = await formSchema.validate(body);

  const { id, firstName, lastName, img, role, orderId, isPublic, startedAt, endedAt } = payload;

  const newItem = {
    id: id ?? undefined,
    firstName,
    lastName,
    img,
    role,
    orderId,
    isPublic,
    startedAt,
    endedAt,
  };

  return newItem;
};

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ error?: string | object; msg?: string } | Expert[] | Expert>
) => {
  // TODO: Use API router for restricted APIs
  const session = await getServerAuthSession({ req, res });
  if (!session?.user) {
    return res.status(401).json({ error: `401 Unauthorized` });
  }

  if (!allowedMethods.includes(req.method ?? '') || req.method == 'OPTIONS') {
    return res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }

  const { param } = req.query;
  const itemId = param?.[0] as string;
  const isSoloItemRequest = !!itemId;

  if (req.method === 'GET') {
    if (isSoloItemRequest) {
      try {
        const expert = await prisma.expert.findUniqueOrThrow({ where: { id: itemId } });
        console.log('Loaded expert:', expert?.id);

        res.status(200).json(expert);
      } catch (error) {
        console.error(error);

        res.status(500).json({ error: JSON.stringify(error), msg: 'Error loading expert' + JSON.stringify(req.query) });
      }
      return;
    }

    try {
      const experts = await prisma.expert.findMany({ orderBy: { orderId: { sort: 'asc' } } });
      console.log('Loaded experts:', experts?.length);

      res.status(200).json(experts);
    } catch (error) {
      console.error(error);

      res.status(500).json({ error: JSON.stringify(error), msg: 'Error loading experts' });
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
      const response = await prisma.expert.update({ where: { id: newItem.id }, data: newItem });
      console.log(response);
      res.status(200).json({ msg: 'Expert updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: JSON.stringify(error), msg: 'Error processing payload' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const id = req.body?.id;
      const expert = await prisma.expert.delete({ where: { id } });

      res.status(200).json(expert);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: JSON.stringify(error), msg: `Error deleting expert with ID: ${req.body?.id}` });
    }
  } else if (req.method === 'POST') {
    const body = parseBody(req);

    let newItem: FormValue;
    try {
      newItem = await validatePayload(body);
    } catch (validationError: unknown) {
      console.log('Validation failed:', validationError);

      return res.status(400).json({
        error: (validationError as ValidationError).errors,
      });
    }

    try {
      const response = await prisma.expert.create({ data: newItem });
      console.log(response);
      res.status(200).json({ msg: 'Expert added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: JSON.stringify(error), msg: 'Error processing payload' });
    }
  }
};

export default handler;
