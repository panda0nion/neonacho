'use client';
import { useState } from 'react';
import { generateAscii } from '@/lib/generateAscii';

export default function AsciiPage() {
  const [text, setText] = useState('');
  const ascii = text ? generateAscii(text) : '';

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6">
      <h1 className="text-lg mb-4">🎨 ASCII Banner Generator</h1>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type a word..."
        className="p-2 rounded bg-zinc-800 text-white mb-4 w-full max-w-md"
      />
      <pre className="text-xs whitespace-pre-wrap">{ascii}</pre>
    </div>
  );
}
