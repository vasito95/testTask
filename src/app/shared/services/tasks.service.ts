import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Task} from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private taskList: Task[] = [];

  public getTasks(): Observable<Task[]> {
    return Observable.create((observer) => {
      observer.next(this.taskList);
    });
  }

  public addTask(task: Task) {
    this.taskList.push(task);
  }

}
