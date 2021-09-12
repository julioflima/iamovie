import type { NextApiRequest, NextApiResponse } from 'next';
import ListService from '../../../services/ListService';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const {
      query: { id }
    } = req;

    // Init the consts.
    const idNumber = Number(id);

    // Execute
    const response = await new ListService().get(idNumber);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export default handler;
