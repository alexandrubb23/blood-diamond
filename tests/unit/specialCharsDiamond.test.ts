import Diamond from '../../src/genericDiamond/Diamond';
import genericDiamondData from '../utils/genericDiamondData';

describe('SpecialCharacters Diamond /', () => {
  const diamondData = genericDiamondData['SpecialCharactersDiamond'];

  const factoryDiamond = (char: string) => {
    const data = diamondData.data;

    return new Diamond(char, data).factory();
  };

  const getDiamondPattern = (char: string) => {
    return diamondData.patterns[char];
  };

  describe('if the argument is invalid', () => {
    it('should throw an error', () => {
      expect(() => factoryDiamond('a+')).toThrowError(/is not allowed/);
    });
  });

  describe(`if the argument is !`, () => {
    it(`should return !`, () => {
      const diamond = factoryDiamond('!');
      const pattern = getDiamondPattern('!');

      expect(diamond).toHaveLength(pattern.length);
      expect(diamond).toEqual(expect.arrayContaining(pattern));
    });
  });

  describe(`if the argument is #`, () => {
    const diamond = factoryDiamond('#');
    const pattern = getDiamondPattern('#');

    it(`should return a diamond from ! to #\n${diamond.join('\n')}`, () => {
      expect(diamond).toHaveLength(pattern.length);
      expect(diamond).toEqual(expect.arrayContaining(pattern));
    });
  });

  describe(`if the argument is $`, () => {
    const diamond = factoryDiamond('$');
    const pattern = getDiamondPattern('$');

    it(`should return a diamond from ! to $\n${diamond.join('\n')}`, () => {
      expect(diamond).toHaveLength(pattern.length);
      expect(diamond).toEqual(expect.arrayContaining(pattern));
    });
  });

  describe(`if the argument is %`, () => {
    const diamond = factoryDiamond('%');
    const pattern = getDiamondPattern('%');

    it(`should return a diamond from ! to %\n${diamond.join('\n')}`, () => {
      expect(diamond).toHaveLength(pattern.length);
      expect(diamond).toEqual(expect.arrayContaining(pattern));
    });
  });

  describe(`if the argument is &`, () => {
    const diamond = factoryDiamond('&');
    const pattern = getDiamondPattern('&');

    it(`should return a diamond from ! to &\n${diamond.join('\n')}`, () => {
      expect(diamond).toHaveLength(pattern.length);
      expect(diamond).toEqual(expect.arrayContaining(pattern));
    });
  });
});
