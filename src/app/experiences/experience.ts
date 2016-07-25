export class PersonExperience {
    id: number;
    name: string;
    picture: string;
    email: string;
    role: string;
    organization: string;
    relationship: string;
}

export class Experience {
  id: number;
  source: PersonExperience;
  target: PersonExperience;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
}
