import { createContext } from 'react';
import { TLoadingContext } from '../types/TLoadingContext';

const loadingContext: TLoadingContext = {
  loadingState: [false, () => {}]
};

const LoadingContext = createContext<TLoadingContext>(loadingContext);

export default LoadingContext;
