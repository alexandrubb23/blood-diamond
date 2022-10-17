import Diamond from '../../src/genericDiamond/Diamond';
import genericDiamondData from '../utils/genericDiamondData';

describe('Alphabetical Diamond /', () => {
  const diamondData = genericDiamondData['AlphabeticalDiamond'];

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

  describe(`if the argument is A`, () => {
    it(`should return A`, () => {
      const diamond = factoryDiamond('A');
      const pattern = getDiamondPattern('A');

      expect(diamond).toHaveLength(pattern.length);
      expect(diamond).toEqual(expect.arrayContaining(pattern));
    });
  });

  describe(`if the argument is B`, () => {
    const diamond = factoryDiamond('B');
    const pattern = getDiamondPattern('B');

    it(`should return a diamond from A to B\n${diamond.join('\n')}`, () => {
      expect(diamond).toHaveLength(pattern.length);
      expect(diamond).toEqual(expect.arrayContaining(pattern));
    });
  });

  describe(`if the argument is C`, () => {
    const diamond = factoryDiamond('C');
    const pattern = getDiamondPattern('C');

    it(`should return a diamond from A to C\n${diamond.join('\n')}`, () => {
      expect(diamond).toHaveLength(pattern.length);
      expect(diamond).toEqual(expect.arrayContaining(pattern));
    });
  });

  describe(`if the argument is D`, () => {
    const diamond = factoryDiamond('D');
    const pattern = getDiamondPattern('D');

    it(`should return a diamond from A to D\n${diamond.join('\n')}`, () => {
      expect(diamond).toHaveLength(pattern.length);
      expect(diamond).toEqual(expect.arrayContaining(pattern));
    });
  });

  describe(`if the argument is E`, () => {
    const diamond = factoryDiamond('E');
    const pattern = getDiamondPattern('E');

    it(`should return a diamond from A to E\n${diamond.join('\n')}`, () => {
      expect(diamond).toHaveLength(pattern.length);
      expect(diamond).toEqual(expect.arrayContaining(pattern));
    });
  });
});
