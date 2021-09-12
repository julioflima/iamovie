import type { NextApiRequest, NextApiResponse } from 'next';
import ListService from '../../../services/ListService';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const {
      body: { name, description },
      method
    } = req;

    // Init the consts.
    const nameString = String(name) || '';
    const descriptionString = String(description) || '';

    // Validations
    // if (method !== 'POST') throw res.status(500).json({ error: 'Method not allowed!' });

    if (typeof nameString !== 'string')
      throw res.status(500).json({ error: 'The parameter "name", must be a string!' });

    if (typeof descriptionString !== 'string')
      throw res.status(500).json({ error: 'The parameter "description", must be a string!' });

    if (typeof nameString !== 'string' && typeof descriptionString !== 'string')
      throw res.status(500).json({ error: 'The parameter "name" and "description", must be a string!' });

    // Execute
    const response = await new ListService().createList(nameString, descriptionString);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export default handler;
