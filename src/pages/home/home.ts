import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TaskService} from "../../services/task.service";
import {Task} from "../../models/task";
import { ModalController } from 'ionic-angular';
import {AddTaskPage} from "../add-task/add-task";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit{

  tasks: Task[] = [];
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              private taskService: TaskService) {
  }

  ngOnInit() {
    console.log(this.taskService.tasks);
    this.tasks = this.taskService.tasks;
  }

  filterTasksonCompletion(param) {
    return this.tasks.filter(val => val.isComplete === param)
  }

  addNewTask() {
    this.modalCtrl.create(AddTaskPage).present();
  }
}
