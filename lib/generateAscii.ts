// File: lib/generateAscii.ts
import figlet from 'figlet';

export async function generateAscii(text: string): Promise<string> {
  return new Promise((resolve, reject) => {
    figlet.text(text, { horizontalLayout: 'default' }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data || '');
      }
    });
  });
}
