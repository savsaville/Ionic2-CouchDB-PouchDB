import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';


/*
  Generated class for the TodosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TodosProvider {

    data: any;
    db: any;
    remote: any;

  constructor() {
    
    this.db = new PouchDB('cloudo');

    this.remote = 'http://127.0.0.1:5984/cloudo';

    let options = {
      live: true,
      retry: true,
      continuous: true
    };

    this.db.sync(this.remote, options);

  }

  getTodos() {

  }

  createTodo(todo) {

  }

  updateTodo(todo) {

  }

  deleteTodo(todo) {

  }

  handleChange(change) {

  }
  
}
