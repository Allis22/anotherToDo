import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../todo.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(tasks: Task[], searchTerm: string): Task[] {
    if (!searchTerm) return tasks;  // Si no hay término de búsqueda, devuelve todas las tareas
    return tasks.filter(task =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
