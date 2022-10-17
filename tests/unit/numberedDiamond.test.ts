import Diamond from '../../src/genericDiamond/Diamond';
import genericDiamondData from '../utils/genericDiamondData';

describe('Numbered Diamond /', () => {
  const diamondData = genericDiamondData['NumberedDiamond'];

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

  describe(`if the argument is 1`, () => {
    it(`should return 1`, () => {
      const diamond = factoryDiamond('1');
      const pattern = getDiamondPattern('1');

      expect(diamond).toHaveLength(pattern.length);
      expect(diamond).toEqual(expect.arrayContaining(pattern));
    });
  });

  describe(`if the argument is 2`, () => {
    const diamond = factoryDiamond('2');
    const pattern = getDiamondPattern('2');

    it(`should return a diamond from 1 to 2\n${diamond.join('\n')}`, () => {
      expect(diamond).toHaveLength(pattern.length);
      expect(diamond).toEqual(expect.arrayContaining(pattern));
    });
  });

  describe(`if the argument is 3`, () => {
    const diamond = factoryDiamond('3');
    const pattern = getDiamondPattern('3');

    it(`should return a diamond from 1 to 3\n${diamond.join('\n')}`, () => {
      expect(diamond).toHaveLength(pattern.length);
      expect(diamond).toEqual(expect.arrayContaining(pattern));
    });
  });

  describe(`if the argument is 4`, () => {
    const diamond = factoryDiamond('4');
    const pattern = getDiamondPattern('4');

    it(`should return a diamond from 1 to 4\n${diamond.join('\n')}`, () => {
      expect(diamond).toHaveLength(pattern.length);
      expect(diamond).toEqual(expect.arrayContaining(pattern));
    });
  });

  describe(`if the argument is 5`, () => {
    const diamond = factoryDiamond('5');
    const pattern = getDiamondPattern('5');

    it(`should return a diamond from 1 to 5\n${diamond.join('\n')}`, () => {
      expect(diamond).toHaveLength(pattern.length);
      expect(diamond).toEqual(expect.arrayContaining(pattern));
    });
  });
});
