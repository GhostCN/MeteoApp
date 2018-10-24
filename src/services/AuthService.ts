import {Injectable} from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;


@Injectable()

export class AuthService {
  private user:firebase.User;

  constructor(public auth:AngularFireAuth){
    this.auth.authState.subscribe(user=>{
      this.user=user;
    })
  }

  signInWithMail(credentials){
    console.log("Sign in with mail");
    return this.auth.auth.signInWithEmailAndPassword(credentials.email,credentials.password);

  }


}
