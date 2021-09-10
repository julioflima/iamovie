export default {
  small: {
    title: true,
    container: { position: 'absolute', absolute: true },
    containerCards: { margin: '0.5rem', overflow: 'revert', flex: '1' },
    card: { borderRadius: '0.125rem' },
    span: { transition: 0.4 },
    image: { size: 'w300', width: 150, height: 200, transition: 0.2, opacity: 0.2 }
  },
  big: {
    title: false,
    container: { position: 'revert', absolute: false },
    containerCards: { margin: '0rem', overflow: 'hidden', flex: 'revert' },
    card: { borderRadius: '0rem' },
    span: { transition: 0.4 },
    image: { size: 'original', width: 300, height: 500, transition: 0.2, opacity: 0.6 }
  }
};
