import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 

 name: string = 'Ashoth';

  department: string = 'Finance';

  status: string = 'Available';

  phone: number = 7763647638;

  email: string = 'helo@gmail.com'

  btnclick: boolean = true;


  constructor() { }

 

  ngOnInit(): void {
    setTimeout(() => {
      this.btnclick = false;
    }, 2000);
  }
  // ontogle() {
  //   if (this.status == 'Available') {
  //     this.status = 'Not Available';
  //   } else {
  //     this.status = ' Available';
  //   }
  // }
}

