import { Profile, Skill } from './profile';

export const SKILLS: Skill[] = [
  {
    id: 1,
    name: 'Start-ups',
    pictures: [
      {
        id: 1,
        address: '/img/tania-skills.jpeg',
        caption: 'Tania at Bunny Inc. first headquarters'
      },
      {
        id: 2,
        address: '/img/tania-skills.jpeg',
        caption: 'Other picture'
      }
    ],
    endorsements: 67,
    studies: 2,
    mentors: 10,
    jobs: 2,
    projects: 5,
    mentees: 25
  }
  // ,
  // {
  //   id: 2,
  //   name: "Voice Over",
  //   endorsements: 67,
  //   studies: 2,
  //   projects: 28,
  //   mentees: 10
  // }
];

export const PROFILE: Profile = {
  id: 1,
  name: 'Tania Zapata',
  picture: '/img/tania-zapata.jpg',
  tagline: 'I’m Co Founder & Advisor at Torre',
  bio: 'Entrepreneur, Problem solver, People geek, learner and strategic risk taker. Endeavor Entrepreneur, and proud mom of a girl named Azul.',
  location: 'San Francisco, CA',
  verifications: 145,
  mentees: 23,
  endorsements: 23,
  skills: SKILLS
};
