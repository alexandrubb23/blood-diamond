import Diamond from '../../src/diamond';

describe('Blood Diamond /', () => {
  const createDiamond = (letter: string): string => {
    const diamond = new Diamond(letter);
    return diamond.create();
  };

  describe('Letter Argument /', () => {
    describe('if the argument is invalid', () => {
      it('should throw an error', () => {
        expect(() => createDiamond('a')).toThrowError('Invalid letter a.');
      });
    });

    describe('if argument is A', () => {
      it('should return A', () => {
        const letter = 'A';

        const diamond = createDiamond(letter);

        expect(diamond).toEqual(letter);
      });
    });

    describe('if argument is B', () => {
      it('should return A B B A', () => {
        const diamond = createDiamond('B');

        expect(diamond.trim()).toEqual('A\nB B\n A');
      });
    });

    describe('if argument is C', () => {
      it('should return A B B C   C B B A', () => {
        const diamond = createDiamond('C');

        expect(diamond.trim()).toEqual('A\n B B\nC   C\n B B\n  A');
      });
    });
  });
});
