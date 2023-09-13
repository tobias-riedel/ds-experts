import { prisma } from '@db/client';
import { Project } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const allowedMethods = ['GET'];

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ error?: string | object; msg?: string } | Project[] | Project>
) => {
  if (!allowedMethods.includes(req.method ?? '') || req.method == 'OPTIONS') {
    return res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }

  const { param } = req.query;
  const itemId = param?.[0] as string;
  const isSoloItemRequest = !!itemId;

  if (isSoloItemRequest) {
    try {
      const project = await prisma.project.findUnique({ where: { id: itemId, isPublic: true } });
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
    const projects = await prisma.project.findMany({
      where: { isPublic: true },
      orderBy: { orderId: { sort: 'asc' } },
    });
    console.log('Loaded projects:', projects?.length);

    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    if (error?.response) {
      console.error(error.response.body);
    }

    res.status(500).json({ msg: 'Error loading projects' });
  }
};

export default handler;
