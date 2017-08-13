import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn: Boolean;
  user_displayName: String;
  user_email: String;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.afAuth.authState.subscribe((data) => {
      if (data == null){
          console.log("Logged Out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['signin']);
      } else {
          console.log("Logged In");
          console.log(data);
          this.isLoggedIn = true;
          this.user_displayName = data.displayName;
          this.user_email = data.email;
          this.router.navigate(['']);
      }
    });
  }
}
