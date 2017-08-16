import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { TodosProvider } from '../../providers/todos/todos';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public nav: NavController, public http: Http, public todoService: TodosProvider) {

  }

  login() {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let credentials = {
      username: this.username,
      password: this.password
    };

    this.http.post('http://localhost:3000/auth/login', JSON.stringify(credentials), { headers: headers })
      .subscribe(res => {
        this.todoService.init(res.json());
        this.nav.setRoot(HomePage);
      }, (err) => {
        console.log(err);
      });

  }

  launchSignup() {
    this.nav.push(SignupPage);
  }

}