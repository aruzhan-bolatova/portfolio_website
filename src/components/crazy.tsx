'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Crazy = () => {
  const sportPhotos: PhotoItem[] = [
    {
      src: '/ajloun.png',
      alt: 'Birthday at construction site in Ajloun, Jordan',
      caption: 'Met my 20th birthday at construction site in Ajloun, Jordan with my friends on Habitat for Humanity project',
    },
    {
      src: '/hackathon.JPG',
      alt: 'Hackathon at NYU',
      caption: 'Participated in my first hackathon at NYU with my friends and got Core42 Chief AI Officer Recognition for the health and wellness project',
    },
    {
      src: '/thai.jpg',
      alt: 'Thailand Teip with my friends',
      caption: 'Visited Thailand in a large group of my friends, rented out a villa, ate a lot of seafood, had best massage ever and overcame my fear of diving',
    },
    {
      src: '/nyc.JPG',
      alt: 'Spent a semester in New York City',
      caption: 'Spent a semester in New York City, and fell in love with the city. Studied at NYU, visited dream places like Central Park, Times Square, and the Statue of Liberty. Transformative experience in my life',
    },
    {
      src: '/oldsanjuan.JPG',
      alt: 'Old San Juan, Puerto Rico',
      caption: 'Traveled to Puerto Rico to see bioluminescent bay but saw a lot more than that: first time in rain forest, first waterfall experience, most beautiful beaches, a lot of latin dances. Best bonding experience with my friend. First time driving a car abroad',
    },
    {
      src: '/abudhabi.jpg',
      alt: 'Introducing my parents to my college life in Abu Dhabi',
      caption: 'Hosted my parents in Abu Dhabi to introduce them to my college life. It was a great experience to show them around my campus and favourite places in the UAE and share my experiences with them',
    }
  ];

  return (

    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Favourite memories
        </h2>
      </div>
      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Crazy;