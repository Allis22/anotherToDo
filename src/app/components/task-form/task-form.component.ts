import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../todo.interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    status: 'To Do',
  };

  @Output() addTaskEvent = new EventEmitter<Task>();

  addTask() {
    if (this.newTask.title && this.newTask.description) {
      this.addTaskEvent.emit(this.newTask);
      this.newTask = { id: 0, title: '', description: '', status: 'To Do' };
    }
  }
}