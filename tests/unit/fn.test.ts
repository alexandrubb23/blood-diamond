import { addPadding, generateAlphabet } from '../../src/utils/fn';

describe('Helper Functions /', () => {
  describe('addPadding', () => {
    it.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])(
      'should return a string with %i spaces',
      spaces => {
        const padding = addPadding(spaces);

        expect(padding).toEqual(' '.repeat(spaces - 1));
      }
    );
  });

  describe('generateAlpabet', () => {
    it('should return an array from A to Z', () => {
      const alphabet = generateAlphabet();

      expect(alphabet.length).toEqual(26);
      expect(alphabet[0]).toEqual('A');
      expect(alphabet[25]).toEqual('Z');
    });
  });
});
