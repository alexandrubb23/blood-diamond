import Diamond from './Diamond';

const factoryDiamond = (char: string, data: string[]) => {
  try {
    const diamond = new Diamond(char, data);

    console.log(diamond.factory().join('\n'));
  } catch (error) {
    if (error instanceof TypeError) console.log(error.message);
  }
};

export default factoryDiamond;
