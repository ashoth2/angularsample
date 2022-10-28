import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  const myobs$ = new Observable(obs =>{
    console.log("Start Observable");
    obs.next('100');
    obs.next('200');
    // obs.error('Not Working');

    setTimeout(() => {
      obs.next('400');
    },1000);

    console.log("End Observable");
  })

  myobs$.subscribe(sub => {
    console.log(sub); 
  },

// error =>{
//   console.log("Error" + error)
// },
() => {
  console.log("Completed")
}
  
  );


  }

}
