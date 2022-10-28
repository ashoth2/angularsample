import { Component, OnInit } from '@angular/core';
// import {firebase} from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'workingsample';

  ngOnInit(){
    const firebaseConfig = {
      apikey: "AIzaSyDdd7IJwWd_U1bopmflSSIx0lB1E0nKZE4"
    };
    // firebase.initializeApp(firebaseConfig);
  }
}
