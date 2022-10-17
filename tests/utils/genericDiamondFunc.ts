import Diamond from '../../src/genericDiamond/Diamond';
import genericDiamondData from './genericDiamondData';

const factoryDiamond = (char: string, data: string[]) => {
  return new Diamond(char, data);
};

const getDiamondType = (diamondType: string) => {
  return genericDiamondData[diamondType];
};

const getDiamondTypeData = (diamondType: string) => {
  return getDiamondType(diamondType).data;
};

const getDiamondTypePattern = (diamondType: string) => {
  return getDiamondType(diamondType).patterns;
};

const sliceData = (data: string[]) => {
  const isSingleChar = isCollectionOfSingleChar(data);
  return isSingleChar ? data.slice(0, 1) : data;
};

const isCollectionOfSingleChar = (data: string[]) => {
  const isSingleChar = data.filter(
    (item, index) => data.indexOf(item) !== index
  );

  return isSingleChar.length > 0;
};

export {
  factoryDiamond,
  genericDiamondData,
  getDiamondTypeData,
  getDiamondTypePattern,
  sliceData,
};
