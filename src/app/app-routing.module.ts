import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatusComponent} from './status/status.component';
import {TasksComponent} from './tasks/tasks.component';

const routes: Routes = [
  {path: '', component: StatusComponent},
  {path: 'status', component: StatusComponent},
  {path: 'tasks', component: TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
