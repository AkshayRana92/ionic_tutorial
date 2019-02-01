import {Injectable} from '@angular/core';
import {Task} from '../models/task';

@Injectable()
export class TaskService {

  tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push()
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1)
  }

  initTodoList(list: Task[]) {
    this.tasks = list;
  }
}
