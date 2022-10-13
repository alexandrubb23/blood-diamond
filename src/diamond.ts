import { addPadding, generateAlphabet } from './utils';

class Diamond {
  private letter: string;
  private firstLetter = 'A';
  private firstHalf: string[] = [];

  constructor(letter: string) {
    const alphabet = generateAlphabet();
    if (!alphabet.includes(letter))
      throw new TypeError(`Invalid letter ${letter}.`);

    this.letter = letter;
  }

  private getCharacterCodeFromLetter(letter: string) {
    return letter.charCodeAt(0);
  }

  private addElementToArray(element: string) {
    const padding = addPadding(this.firstHalf.length + 1);
    this.firstHalf.unshift(padding + element);
  }

  private addPaddingBasedOnCharacterCode = (characterCode: number): string => {
    const spaces =
      (characterCode - this.getCharacterCodeFromLetter(this.firstLetter)) * 2;

    return addPadding(spaces);
  };

  private isFirstLetter(letter: string) {
    return letter === this.firstLetter;
  }

  private get secondHalf(): string[] {
    return this.firstHalf.slice(0, -1).reverse();
  }

  private getNextLetterFromCharacterCode(characterCode: number) {
    return String.fromCharCode(characterCode - 1);
  }

  build(letter: string = this.letter, firstHalf: string[] = []): string {
    this.firstHalf = firstHalf;

    if (this.isFirstLetter(letter)) {
      this.addElementToArray(this.firstLetter);
    } else {
      const characterCode = this.getCharacterCodeFromLetter(letter);
      const innerPadding = this.addPaddingBasedOnCharacterCode(characterCode);

      this.addElementToArray(letter + innerPadding + letter);

      const nextLetter = this.getNextLetterFromCharacterCode(characterCode);
      return this.build(nextLetter, this.firstHalf);
    }

    return [...this.firstHalf, ...this.secondHalf].join('\n');
  }
}

export default Diamond;
