import {Injectable} from '@angular/core';
import {Task} from '../models/task';

@Injectable()
export class SharedService {

  public todoList: Task[] = [];
}
