import {Component, OnInit, ViewChild} from '@angular/core';

import {Platform, MenuController, Nav, NavParams} from 'ionic-angular';

import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage} from "../pages/home/home";
import {TaskService} from "../services/task.service";
import {Task} from "../models/task";


@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HomePage;
  pages: Array<{title: string, component: any}>;
  tasks: Task[] = [];

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private taskService: TaskService
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'My First List', component: ListPage }
    ];
  }

  ngOnInit() {
    this.tasks.push({description: 'Initialize Tasks', creationDate: new Date(), completionDate: null, isComplete: true})
    this.tasks.push({description: 'Add new Task Functionality', creationDate: new Date(), completionDate: null, isComplete: false})
    this.tasks.push({description: 'Delete tasks', creationDate: new Date(), completionDate: null, isComplete: false})
    this.tasks.push({description: 'Design tasks', creationDate: new Date(), completionDate: null, isComplete: false})
    this.taskService.initTodoList(this.tasks);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.show();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
