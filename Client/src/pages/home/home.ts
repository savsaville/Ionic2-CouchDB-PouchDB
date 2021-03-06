import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TodosProvider } from '../../providers/todos/todos';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todos: any;

  constructor(public nav: NavController, public todoService: TodosProvider, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {

    this.todoService.getTodos().then((data) => {
      this.todos = data;
    });

  }

  logout() {
    this.todoService.logout();
    this.todos = null;
    this.nav.setRoot(LoginPage);
  }

  createTodo() {

    let prompt = this.alertCtrl.create({
      title: 'Add',
      message: 'What do you need to do?',
      inputs: [
        {
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.todoService.createTodo({ title: data.title });
          }
        }
      ]
    });

    prompt.present();

  }

  updateTodo(todo) {

    let prompt = this.alertCtrl.create({
      title: 'Edit',
      message: 'Change your mind?',
      inputs: [
        {
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.todoService.updateTodo({
              _id: todo._id,
              _rev: todo._rev,
              title: data.title
            });
          }
        }
      ]
    });

    prompt.present();
  }

  deleteTodo(todo) {
    this.todoService.deleteTodo(todo);
  }

}