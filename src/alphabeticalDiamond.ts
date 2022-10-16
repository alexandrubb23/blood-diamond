import { generateAlphabet } from './utils';
import factoryDiamond from './genericDiamond';

const arg = process.argv.pop() as string;
const letter = arg.startsWith('letter=') ? arg.split('=')[1] : 'C';

const data = generateAlphabet();

console.log('====================================');
console.log('Alphabetical Diamond');
console.log('====================================');

factoryDiamond(letter, data);
