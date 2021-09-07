import { ThemeProvider } from 'styled-components';
import { theme } from '../constants/theme';

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
