import { theme } from '../../styles/theme';

const properties = {
  small: {
    container: { position: 'absolute', absolute: true },
    containerCards: { margin: '0.5rem', overflow: 'revert', flex: '1' },
    card: { borderRadius: '0.125rem', background: theme.colors.secondary.one },
    span: { transition: 0.4 },
    image: { size: 'w300', width: 150, height: 250, transition: 0.2, opacity: 0.9 }
  },
  big: {
    container: { position: 'revert', absolute: false },
    containerCards: { margin: '0rem', overflow: 'hidden', flex: 'revert' },
    card: { borderRadius: '0rem', background: theme.colors.primary.one },
    span: { transition: 0.4 },
    image: { size: 'original', width: 300, height: 550, transition: 0.6, opacity: 0.6 }
  }
};

export default properties as { [key: string]: typeof properties.small };
