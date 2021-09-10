import React from 'react';
import CustomError from '../components/CustomError';

const Error404: React.FC = () => {
  return <CustomError path="/404_error.svg" text="404 - Page Not Found" />;
};

export default Error404;
