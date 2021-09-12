// eslint-disable-next-line import/prefer-default-export
export const concatenate = (text: string[]): string =>
  (text.length > 1
    ? (() => {
        const textJoined = text.join(', ');
        return `${textJoined?.slice(0, textJoined.length)}.`;
      })()
    : text.join('')) ?? '';

export const money = (value: number): string => `$ ${new Intl.NumberFormat('en-US').format(value)}`;
