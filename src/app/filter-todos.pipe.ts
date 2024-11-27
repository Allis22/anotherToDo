import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './todo.interface';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(todos: Task[], status: string): Task[] {
    if (!todos || !status) {
      return todos; 
    }
    return todos.filter((task) => task.status === status);
  }
}
