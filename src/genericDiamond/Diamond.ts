import { addPadding } from '../utils';

type StringArray = string[];

class Diamond {
  private collection: StringArray;
  private countCollection: number;
  private diamondShape: StringArray = [];

  constructor(private char: string, private data: StringArray) {
    if (!data.includes(char))
      throw new TypeError(
        `Char ${char} is not allowed. Max char is ${this.getLastElementFromData}`
      );

    this.char = char;
    this.data = data;

    this.collection = this.sliceData();
    this.countCollection = this.collection.length;
  }

  private sliceData() {
    const index = this.indexOf();
    return this.sliceDataAndReverseOrder(this.data, index);
  }

  private addPaddingInBetweenChars(elementIndex: number) {
    const padding = this.getDistanceBetweenLastAndCurrentIndex(elementIndex);

    return this.char + addPadding(padding) + this.char;
  }

  private getDistanceBetweenLastAndCurrentIndex(elementIndex: number) {
    return (this.getLastIndexFromCollection - elementIndex) * 2;
  }

  private addCharAtTheBeginingOfArray(char: string) {
    const { length } = this.diamondShape;
    const padding = addPadding(length + 1);

    this.diamondShape.unshift(padding + char);
  }

  factory(elementIndex = 0): StringArray {
    this.char = this.collection[elementIndex];

    if (this.isLastElementFromCollection(elementIndex)) {
      this.addCharAtTheBeginingOfArray(this.char);

      return this.diamond();
    }

    const paddedChar = this.addPaddingInBetweenChars(elementIndex);

    this.addCharAtTheBeginingOfArray(paddedChar);

    return this.factory(elementIndex + 1);
  }

  private diamond() {
    const bottomDiamondShape = this.sliceDataAndReverseOrder(
      this.diamondShape,
      -1
    );

    return [...this.diamondShape, ...bottomDiamondShape];
  }

  private sliceDataAndReverseOrder(data: StringArray, end: number | undefined) {
    return data.slice(0, end).reverse();
  }

  private indexOf() {
    // TODO: Find a better approach...
    const duplicates = this.data.filter(
      (char, index) => this.dataIndexOf(char) !== index
    );

    return duplicates.length === 0
      ? this.dataIndexOf(this.char) + 1
      : undefined;
  }

  private dataIndexOf(char: string) {
    return this.data.indexOf(char);
  }

  private isLastElementFromCollection(elementIndex: number) {
    return this.getLastIndexFromCollection === elementIndex;
  }

  private get getLastIndexFromCollection() {
    return this.countCollection - 1;
  }

  private get getLastElementFromData() {
    return this.data.at(-1);
  }

  get getLastElementFromCollection() {
    return this.collection.at(-1);
  }
}

export default Diamond;
