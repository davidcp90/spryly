import { Contact } from '../contact';

export class Invite{
	constructor(
		public id: number,
		public contact: Contact,
		public message?: string
	){}
}
