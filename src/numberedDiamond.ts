import factoryDiamond from './genericDiamond';

const arg = process.argv.pop() as string;
const number = arg.startsWith('number=') ? arg.split('=')[1] : 'C';

const generateArrayOfStringNumbers = (capacity: number): string[] => {
  return new Array(capacity)
    .join()
    .split(',')
    .map((_, index) => String(index + 1));
};

const data = generateArrayOfStringNumbers(26);

console.log('====================================');
console.log('Numbered Diamond');
console.log('====================================');

factoryDiamond(number, data);
