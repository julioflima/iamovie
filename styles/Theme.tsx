import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
