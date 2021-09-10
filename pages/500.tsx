import React from 'react';
import CustomError from '../components/CustomError';

const Error500: React.FC = () => {
  return <CustomError path="/500_error.svg" text=" - Server-side error occurred</h1>" />;
};

export default Error500;
