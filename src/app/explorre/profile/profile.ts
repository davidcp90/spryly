export class Picture {
  id: number;
  address: string;
  caption: string;
}

export class Skill {
  id: number;
  name: string
  pictures: Picture[];
  endorsements: number;
  studies: number;
  mentors: number;
  jobs: number;
  projects: number;
  mentees: number;
}

export class Profile {
  id: number;
  name: string;
  picture: string;
  tagline: string;
  bio: string;
  location: string;
  verifications: number;
  mentees: number;
  endorsements: number;
  skills: Skill[];
}
