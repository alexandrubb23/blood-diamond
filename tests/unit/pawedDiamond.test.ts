import Diamond from '../../src/genericDiamond/Diamond';
import genericDiamondData from '../utils/genericDiamondData';

describe('Pawed Diamond /', () => {
  const diamondData = genericDiamondData['PawedDiamond'];

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

  describe(`if the argument is #`, () => {
    const diamond = factoryDiamond('#');
    const pattern = getDiamondPattern('#');

    it(`should return a powed diamond\n${diamond.join('\n')}`, () => {
      expect(diamond).toHaveLength(pattern.length);
      expect(diamond).toEqual(expect.arrayContaining(pattern));
    });
  });
});
