'use client';

import { useEffect, useState } from "react";

type Badge = {
  title: string;
  issuer: string;
  image: string;
  url: string;
};

export default function Badges() {
  const [badges, setBadges] = useState<Badge[]>([]);

  useEffect(() => {
    fetch("/data/badges.json")
      .then((res) => res.json())
      .then((data) => setBadges(data));
  }, []);

  return (
    <div className="w-full max-w-5xl mt-12">
      <h2 className="text-lg font-mono text-zinc-400 mb-4 text-center">Verified Badges</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 justify-center items-center">
        {badges.map((badge, index) => (
          <a
            key={index}
            href={badge.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-1 hover:scale-105 transition-transform"
          >
            <img
              src={badge.image}
              alt={badge.title}
              className="w-12 h-12 object-contain grayscale group-hover:grayscale-0"
            />
            <p className="text-xs text-zinc-400 text-center">{badge.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
