import factoryDiamond from './genericDiamond';

const chars = [
  '!',
  '#',
  '$',
  '%',
  '&',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  ']',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~',
];

console.log('====================================');
console.log('Special Chars Diamond');
console.log('====================================');

factoryDiamond(chars.at(-1) as string, chars);
