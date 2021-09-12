import type { NextApiRequest, NextApiResponse } from 'next';
import ListService from '../../../services/ListService';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  // DISCLAIMER I:
  //   1 - To use the useFetch was decided to not implement the validation of method, to not worry with the options.
  //   2 - So the lines 12, 16 and 20 was commented.

  // DISCLAIMER II:
  //   1 - To simpliest was validated in backend if the movie was added and simply toggled.
  //   2 - Follow the lines 33 and 34.

  try {
    const {
      query: { movie_id }
      // method
    } = req;

    // Init consts.
    // const methodString = String(method);
    const movieNumber = Number(movie_id);

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
