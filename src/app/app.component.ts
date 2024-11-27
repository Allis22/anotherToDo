import { Component } from '@angular/core';
import { Task } from './todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Task Manager';

  todos: Task[] = [
    { id: 1, title: 'Go Home', description: 'It is almost Time', status: 'To Do' },
    { id: 2, title: 'Do Homework', description: 'Yo can do it', status: 'In Progress' },
    { id: 3, title: 'Cook', description: 'Good Job', status: 'Done' },
  ];


  searchTerm: string = '';

  addTask(task: Task) {
    this.todos.push({ ...task, id: this.todos.length + 1 });
  }

  deleteTask(taskId: number) {
    this.todos = this.todos.filter((task) => task.id !== taskId);
  }
}
