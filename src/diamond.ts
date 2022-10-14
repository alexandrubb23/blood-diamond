import { addPadding, generateAlphabet } from './utils';

class Diamond {
  private topDiamondShape: string[] = [];
  private static readonly firstLetter = 'A';

  constructor(private letter: string) {
    const alphabet = generateAlphabet();
    if (!alphabet.includes(letter))
      throw new TypeError(`Invalid letter ${letter}.`);

    this.letter = letter;
  }

  private addLetterToArray(letter: string = Diamond.firstLetter) {
    let { length } = this.topDiamondShape;
    const padding = addPadding(++length);

    this.topDiamondShape.unshift(padding + letter);
  }

  private addPaddingByCharCode = (charCode: number) => {
    const charCodeFirstLetter = this.getCharCodeFromLetter(Diamond.firstLetter);
    const padding = (charCode - charCodeFirstLetter) * 2;

    return addPadding(padding);
  };

  private getCharCodeFromLetter(letter: string) {
    return letter.charCodeAt(0);
  }

  private getNextLetterFromCharCode(charCode: number) {
    return String.fromCharCode(charCode - 1);
  }

  private get isFirstLetter() {
    return this.letter === Diamond.firstLetter;
  }

  private get bottomDiamondShape(): string[] {
    return this.topDiamondShape.slice(0, -1).reverse();
  }

  private factoryDiamond() {
    if (this.isFirstLetter) return this.addLetterToArray();

    const charCode = this.getCharCodeFromLetter(this.letter);
    const innerPadding = this.addPaddingByCharCode(charCode);

    const letter = this.letter + innerPadding + this.letter;
    this.addLetterToArray(letter);

    this.letter = this.getNextLetterFromCharCode(charCode);

    return this.create();
  }

  create(): string {
    this.factoryDiamond();

    const diamond = [...this.topDiamondShape, ...this.bottomDiamondShape];

    return diamond.join('\n');
  }
}

export default Diamond;
