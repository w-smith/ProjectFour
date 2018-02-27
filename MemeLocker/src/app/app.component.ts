import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';


ngOnInit() {
const config = {
      apiKey: "AIzaSyBEVTLrl0SruA_stSES6qlvmzROKe5a9Cw",
      authDomain: "memelocker-f28f3.firebaseapp.com",
      databaseURL: "https://memelocker-f28f3.firebaseio.com",
      projectId: "memelocker-f28f3",
      storageBucket: "memelocker-f28f3.appspot.com",
      messagingSenderId: "877268442748"
    };
  firebase.initializeApp(config);
}

}