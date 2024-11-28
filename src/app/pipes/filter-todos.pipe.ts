import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../todo.interface';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {
  transform(tasks: Task[], status: string): Task[] {
    return tasks.filter(task => task.status === status);
  }
}
