// asciiGenerator.ts
import { asciiFont } from './asciiFont';

export function generateAscii(text: string): string {
  const upper = text.toUpperCase();

  let line1 = '';
  let line2 = '';

  for (const char of upper) {
    const ascii = asciiFont[char] || ['??', '??'];
    line1 += ascii[0] + ' ';
    line2 += ascii[1] + ' ';
  }

  return `${line1.trim()}\n${line2.trim()}`;
}
