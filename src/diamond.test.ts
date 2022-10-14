import Diamond from './diamond';

describe('Blood Diamond /', () => {
  let letter: string;
  const createDiamond = (): string => {
    const diamond = new Diamond(letter);
    return diamond.create();
  };

  describe('Letter Argument /', () => {
    describe('if the argument is invalid', () => {
      it('should throw an error', () => {
        letter = 'a';

        expect(() => createDiamond()).toThrowError('Invalid letter a.');
      });
    });

    describe('if argument is A', () => {
      it('should return A', () => {
        letter = 'A';

        const diamond = createDiamond();

        expect(diamond).toEqual('A');
      });
    });

    describe('if argument is B', () => {
      it('should return A B B A', () => {
        letter = 'B';
        const diamond = createDiamond();

        expect(diamond.trim()).toEqual('A\nB B\n A');
      });
    });

    describe('if argument is C', () => {
      it('should return A B B C   C B B A', () => {
        letter = 'C';

        const diamond = createDiamond();

        expect(diamond.trim()).toEqual('A\n B B\nC   C\n B B\n  A');
      });
    });
  });
});
