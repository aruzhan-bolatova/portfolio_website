'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Sports = () => {
  const sportPhotos: PhotoItem[] = [
    {
      src: '/volleyball_team.JPG',
      alt: 'Playing in the university volleyball team',
      caption: 'Playing in the university volleyball team and became champion in 2023 and 2024',
    },
    {
      src: '/national_award.png',
      alt: 'UAE National Games winner with NYUAD volleyball team',
      caption: 'UAE National Games winner with NYUAD volleyball team',
    },
    {
      src: '/horse.JPG',
      alt: 'Horse riding',
      caption: 'Horse riding in Almaty, Kazakhstan and reconnecting with my Kazakh nomad heritage',
    },
    {
      src: '/hiking.JPG',
      alt: 'Hiking',
      caption: 'I love hiking and exploring new places. This was my favourite hike in Puerto Rico',
    },
    {
      src: '/padel.png',
      alt: 'Padel',
      caption: 'Tennis, padel, squash, badminton, and table tennis? I love all of them',
    },
    {
      src: '/muaythai.JPG',
      alt: 'Muay Thai',
      caption: 'Muay Thai is my favourite martial art and I love to train it',
    }
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          My Sporting Journey
        </h2>
        <p className="mt-4 text-muted-foreground">
          I was always into sports and I played volleyball at a high level in university team. We even became champions in 2023 and 2024. Here are some highlights from my sporting journey.
        </p>
      </div>
      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Sports;