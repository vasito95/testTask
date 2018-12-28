import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Status} from '../models/status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private statusList: Status[] = [
    new Status('Default')
  ];

  public getStatuses(): Observable<Status[]> {
    return Observable.create((observer) => {
      observer.next(this.statusList);
    });
  }

  public addStatus(status: Status) {
    this.statusList.push(status);
  }

}
