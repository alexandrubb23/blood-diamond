const addPadding = (padding: number): string => Array(padding).join(' ');

const generateAlphabet = (): string[] => {
  return new Array(26)
    .join()
    .split(',')
    .map((_, i) => String.fromCharCode(i + 65));
};

export { addPadding, generateAlphabet };
