import { createContext } from 'react';
import { TQueryContext } from '../types/TQueryContext';

const queryContext: TQueryContext = {
  queryState: ['', () => {}]
};

const QueryContext = createContext<TQueryContext>(queryContext);

export default QueryContext;
