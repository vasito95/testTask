import {Component, OnInit} from '@angular/core';
import {TasksService} from '../shared/services/tasks.service';
import {Task} from '../shared/models/task.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StatusService} from '../shared/services/status.service';
import {Status} from '../shared/models/status.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  taskList: Task[] = [];
  statusList: Status[] = [];
  modalOpened = false;
  form: FormGroup;

  constructor(private statusService: StatusService,
              private taskService: TasksService) {
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((data) => this.taskList = data);
    this.statusService.getStatuses().subscribe((data) => this.statusList = data);
    this.form = new FormGroup({
      'description': new FormControl(null, [Validators.required]),
      'date': new FormControl(null, [Validators.required]),
      'status': new FormControl(null, [Validators.required])
    });
  }

  addNewTask(): void {
    const {date, description, status} = this.form.value;
    this.taskService.addTask(new Task(date, status, description));
    this.modalOpened = false;
    this.form.reset();
  }

  cancelAdd(): void {
    this.modalOpened = false;
    this.form.reset();
  }
}
