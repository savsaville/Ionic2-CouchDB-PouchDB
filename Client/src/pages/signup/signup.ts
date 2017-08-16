import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { HomePage } from '../home/home';
import { TodosProvider } from '../../providers/todos/todos';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(public nav: NavController, public http: Http, public todoService: TodosProvider) {

  }

  register() {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    };

    this.http.post('http://localhost:3000/auth/register', JSON.stringify(user), { headers: headers })
      .subscribe(res => {
        this.todoService.init(res.json());
        this.nav.setRoot(HomePage);
      }, (err) => {
        console.log(err);
      });

  }

}

}
