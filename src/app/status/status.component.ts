import {Component, OnInit} from '@angular/core';
import {StatusService} from '../shared/services/status.service';
import {Status} from '../shared/models/status.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  statusList: Status[] = [];
  modalOpened = false;
  form: FormGroup;

  constructor(private statusService: StatusService) {
  }

  ngOnInit() {
    this.statusService.getStatuses().subscribe((data) => this.statusList = data);
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required])
    });
  }

  addNewStatus(): void {
    const {name} = this.form.value;
    this.statusService.addStatus(new Status(name));
    this.form.reset();
    this.modalOpened = false;
  }

  cancelAdd(): void {
    this.form.reset();
    this.modalOpened = false;
  }

}
