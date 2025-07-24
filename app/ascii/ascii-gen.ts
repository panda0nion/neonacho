import { generateAscii } from '@/lib/generateAscii';

async function run() {
  const inputText = process.argv[2] || 'Hello, Jelly!';
  const ascii = await generateAscii(inputText);
  console.log(ascii);
}

run();
