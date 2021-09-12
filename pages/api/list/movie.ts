import type { NextApiRequest, NextApiResponse } from 'next';
import ListService from '../../../services/ListService';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const {
      body: { movie_id },
      method
    } = req;

    // Init consts.
    const methodString = String(method);
    const movieNumber = Number(movie_id) || 18;

    // Validations.
    // if (methodString !== 'POST') throw res.status(500).json({ error: 'Method not allowed!' });

    if (typeof movieNumber !== 'number')
      throw res.status(500).json({ error: 'The parameter "movie_id", must be a number!' });

    // Execute.
    const ls = new ListService();

    const check = await ls.checkMovie(movieNumber);
    const response = check.item_present ? await ls.removeMovie(movieNumber) : await ls.addMovie(movieNumber);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export default handler;
