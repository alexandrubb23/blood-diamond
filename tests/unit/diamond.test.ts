import Diamond from '../../src/diamond';
import { diamondPatterns } from '../utils';

describe('Blood Diamond /', () => {
  const createDiamondFromLetter = (letter: string): string[] => {
    const diamond = new Diamond(letter);
    return diamond.create();
  };

  describe('Letter Argument /', () => {
    describe('if the argument is invalid', () => {
      it('should throw an error', () => {
        expect(() => createDiamondFromLetter('a')).toThrowError(
          'Invalid letter a.'
        );
      });
    });

    const letters = Object.keys(diamondPatterns);
    const firstLetter = Diamond.getFirstLetter;

    describe.each(letters)(`if the argument is %s`, letter => {
      const diamond = createDiamondFromLetter(letter);

      const expected =
        letter === firstLetter
          ? firstLetter
          : `a diamond from ${firstLetter} to ${letter}\n${diamond.join('\n')}`;

      it(`should return ${expected}`, () => {
        const pattern = diamondPatterns[letter];

        expect(diamond).toHaveLength(pattern.length);
        expect(diamond).toEqual(expect.arrayContaining(pattern));
      });
    });
  });
});
