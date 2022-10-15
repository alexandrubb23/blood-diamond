import { addPadding, generateAlphabet } from './utils';

const letters = generateAlphabet();

class Diamond {
  private diamondShape: string[] = [];
  private static readonly firstLetter = 'A';

  constructor(private letter: string) {
    if (!letters.includes(letter))
      throw new TypeError(`Invalid letter ${letter}.`);

    this.letter = letter;
  }

  private addLetterToArray(letter: string = Diamond.firstLetter) {
    let { length } = this.diamondShape;
    const padding = addPadding(++length);

    this.diamondShape.unshift(padding + letter);
  }

  private addPaddingByCharCode = (charCode: number) => {
    const charCodeFirstLetter = this.getCharCodeFromLetter();
    const padding = (charCode - charCodeFirstLetter) * 2;

    return addPadding(padding);
  };

  private addPaddingBetweenLetters = (charCode: number) => {
    const paddingBetweenLetters = this.addPaddingByCharCode(charCode);

    return this.letter + paddingBetweenLetters + this.letter;
  };

  private getCharCodeFromLetter(letter: string = Diamond.firstLetter) {
    return letter.charCodeAt(0);
  }

  private getNextLetterFromBeforeCharCode(charCode: number) {
    return String.fromCharCode(charCode - 1);
  }

  private get isFirstLetter() {
    return this.letter === Diamond.firstLetter;
  }

  create(): string[] {
    if (this.isFirstLetter) {
      this.addLetterToArray();
      return this.diamond();
    }

    const charCode = this.getCharCodeFromLetter(this.letter);
    const letter = this.addPaddingBetweenLetters(charCode);

    this.addLetterToArray(letter);

    this.letter = this.getNextLetterFromBeforeCharCode(charCode);

    return this.create();
  }

  private diamond() {
    const bottomDiamondShape = this.diamondShape.slice(0, -1).reverse();

    return [...this.diamondShape, ...bottomDiamondShape];
  }

  static get getFirstLetter() {
    return Diamond.firstLetter;
  }
}

export default Diamond;
