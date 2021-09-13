import type { NextApiRequest, NextApiResponse } from 'next';
import ListService from '../../../services/ListService';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    // Execute
    const response = await new ListService().getFavorites();

    return res.status(200).json(response);
  } catch (error) {
    const err = error instanceof Error ? error : new Error('Internal error!');
    return res.status(500).json(err.message);
  }
};

export default handler;
