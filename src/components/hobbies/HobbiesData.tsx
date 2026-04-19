import React from 'react';

export type HobbyCard = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

const HobbyContent = ({
  description,
  facts,
}: {
  description: string;
  facts: string[];
}) => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      {description}
    </p>
    <ul className="mt-6 space-y-2">
      {facts.map((fact, i) => (
        <li
          key={i}
          className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base font-sans flex items-start gap-2"
        >
          <span className="text-purple-500 font-bold mt-0.5">&#8226;</span>
          {fact}
        </li>
      ))}
    </ul>
  </div>
);

export const hobbiesData: HobbyCard[] = [
  {
    src: '/volleyball_team.JPG',
    title: 'Volleyball',
    category: 'Team Sport',
    content: (
      <HobbyContent
        description="Volleyball is more than a sport for me — it's where I learned real teamwork and leadership under pressure."
        facts={[
          'Member of the NYU Abu Dhabi varsity volleyball team',
          'University champion in 2023 and 2024',
          'Competed in inter-university tournaments across the UAE',
        ]}
      />
    ),
  },
  {
    src: '/muaythai.JPG',
    title: 'Muay Thai',
    category: 'Martial Arts',
    content: (
      <HobbyContent
        description="Muay Thai is my go-to for mental clarity. Eight limbs, full focus — the perfect reset after deep coding sessions."
        facts={[
          'Training regularly in Abu Dhabi',
          'Improves discipline, focus, and physical conditioning',
          'Started as a stress outlet, became a passion',
        ]}
      />
    ),
  },
  {
    src: '/padel.png',
    title: 'Padel',
    category: 'Racket Sport',
    content: (
      <HobbyContent
        description="Padel combines the best of tennis and squash — fast-paced, social, and endlessly fun. My favourite weekend activity."
        facts={[
          'Discovered padel in Abu Dhabi where it is hugely popular',
          'Play regularly with friends on weekends',
          'Great combination of strategy and athleticism',
        ]}
      />
    ),
  },
  {
    src: '/hiking.JPG',
    title: 'Hiking',
    category: 'Outdoors',
    content: (
      <HobbyContent
        description="Hiking gives me perspective — literally and figuratively. Nothing beats a trail for clearing your head."
        facts={[
          'Hiked trails across Jordan, UAE, and beyond',
          'Participated in Habitat for Humanity in Ajloun, Jordan',
          'Best conversations happen on trail — no phones, full presence',
        ]}
      />
    ),
  },
  {
    src: '/horse.JPG',
    title: 'Horse Riding',
    category: 'Equestrian',
    content: (
      <HobbyContent
        description="Horse riding connects me to Kazakhstan's nomadic heritage. A humbling, grounding experience unlike any other."
        facts={[
          'Riding connects me to Kazakh cultural roots',
          'Requires patience, balance, and non-verbal trust',
          'One of the most grounding experiences I know',
        ]}
      />
    ),
  },
  {
    src: '/maldives.JPG',
    title: 'Travel',
    category: 'Adventure',
    content: (
      <HobbyContent
        description="13 countries, 3 continents, and counting. Every trip rewires how I see the world."
        facts={[
          'Visited 13 countries across Asia, Europe, and the Americas',
          'Highlights: Maldives, Thailand, Puerto Rico, NYC, Jordan',
          'Next goal: explore Central Asia and South America',
        ]}
      />
    ),
  },
];
