import Diamond from './diamond';

const arg = process.argv.pop() as string;
const letter = arg.startsWith('letter:') ? arg.split(':')[1] : 'C';

try {
  const diamond = new Diamond(letter).build();

  console.log(diamond);
} catch (error) {
  if (error instanceof TypeError) console.log(error.message);
}
