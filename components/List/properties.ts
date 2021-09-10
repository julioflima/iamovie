import { theme } from '../../styles/theme';

export default {
  small: {
    container: { position: 'absolute', absolute: true, paddingTop: '0rem' },
    containerCards: { margin: '0.5rem', overflow: 'revert', flex: '1' },
    card: { borderRadius: '0.125rem', background: theme.colors.secondary.one },
    span: { transition: 0.4 },
    image: { size: 'w300', width: 150, height: 200, transition: 0.2, opacity: 0.9 }
  },
  big: {
    container: { position: 'revert', absolute: false, paddingTop: '6rem' },
    containerCards: { margin: '0rem', overflow: 'hidden', flex: 'revert' },
    card: { borderRadius: '0rem', background: theme.colors.primary.one },
    span: { transition: 0.4 },
    image: { size: 'original', width: 300, height: 500, transition: 0.6, opacity: 0.6 }
  }
};
