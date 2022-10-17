import {
  factoryDiamond,
  genericDiamondData,
  getDiamondTypeData,
  getDiamondTypePattern,
  sliceData,
} from '../utils/genericDiamondFunc';

describe('Generic Diamonds /', () => {
  const diamondsTypes = Object.keys(genericDiamondData);

  describe.each(diamondsTypes)(`Dynamic %s /`, diamondType => {
    const data = getDiamondTypeData(diamondType);
    const slicedData = sliceData(data);

    describe('if the argument is invalid', () => {
      it('should throw an error', () => {
        expect(() => factoryDiamond('a+', [])).toThrowError(/is not allowed/);
      });
    });

    describe.each(slicedData)(`if the argument is %s`, char => {
      const diamondInstance = factoryDiamond(char, data);
      const diamond = diamondInstance.factory();

      const lastElement = diamondInstance.getLastElementFromCollection;

      const expected =
        char === lastElement && slicedData.length > 1
          ? lastElement
          : `a diamond from ${diamond[0].trim()} to ${char}\n${diamond.join(
              '\n'
            )}`;

      it(`should return ${expected}`, () => {
        const pattern = getDiamondTypePattern(diamondType)[char];

        expect(diamond).toHaveLength(pattern.length);
        expect(diamond).toEqual(expect.arrayContaining(pattern));
      });
    });
  });
});
