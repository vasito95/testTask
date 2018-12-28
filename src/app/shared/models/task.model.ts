import {Status} from './status.model';

export class Task {

  constructor(date: Date, status: Status, description: string) {
    this.status = status;
    this.date = date;
    this.description = description;
  }

  date: Date;
  status: Status;
  description: string;
}
