import Diamond from '../../src/diamond';
import { diamondPatterns } from '../utils';

describe('Blood Diamond /', () => {
  const createDiamond = (letter: string): string[] => {
    const diamond = new Diamond(letter);
    return diamond.create();
  };

  describe('Letter Argument /', () => {
    describe('if the argument is invalid', () => {
      it('should throw an error', () => {
        expect(() => createDiamond('a')).toThrowError('Invalid letter a.');
      });
    });

    const letters = Object.keys(diamondPatterns);

    describe.each(letters)(`if the argument is %s`, letter => {
      const diamond = createDiamond(letter);

      const expected =
        letter === 'A'
          ? 'A'
          : `a diamond from A to ${letter}\n${diamond.join('\n')}`;

      it(`should return ${expected}`, () => {
        expect(diamond).toEqual(
          expect.arrayContaining(diamondPatterns[letter])
        );
      });
    });
  });
});
