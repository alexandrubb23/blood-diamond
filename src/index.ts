import Diamond from './diamond';

const arg = process.argv.pop() as string;
const letter = arg.startsWith('letter=') ? arg.split('=')[1] : 'C';
console.log({ letter });
try {
  const diamond = new Diamond(letter);

  console.log(diamond.create());
} catch (error) {
  if (error instanceof TypeError) console.log(error.message);
}
