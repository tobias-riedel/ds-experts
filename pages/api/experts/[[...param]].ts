import { prisma } from '@db/client';
import { Expert } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const allowedMethods = ['GET'];

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ error?: string | object; msg?: string } | Expert[] | Expert>
) => {
  if (!allowedMethods.includes(req.method ?? '') || req.method == 'OPTIONS') {
    return res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }

  const { param } = req.query;
  const itemId = param?.[0] as string;
  const isSoloItemRequest = !!itemId;

  if (isSoloItemRequest) {
    try {
      const expert = await prisma.expert.findUnique({ where: { id: itemId, isPublic: true } });
      console.log('Loaded expert:', expert?.id);

      res.status(200).json(expert);
    } catch (error) {
      console.error(error);
      if (error?.response) {
        console.error(error.response.body);
      }

      res.status(500).json({ msg: 'Error loading expert' + JSON.stringify(req.query) });
    }
    return;
  }

  try {
    const experts = await prisma.expert.findMany({ where: { isPublic: true }, orderBy: { orderId: { sort: 'asc' } } });
    console.log('Loaded experts:', experts?.length);

    res.status(200).json(experts);
  } catch (error) {
    console.error(error);
    if (error?.response) {
      console.error(error.response.body);
    }

    res.status(500).json({ msg: 'Error loading experts' });
  }
};

export default handler;
