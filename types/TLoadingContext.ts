import { Dispatch, SetStateAction } from 'react';

export type TLoadingContext = {
  loadingState: [boolean, Dispatch<SetStateAction<boolean>>];
};
