import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css'],
})
export class MiddleComponent implements OnInit {
  studentID: number = 23;

  studentname: string = 'Ashoth';

  department: string = 'Computer Science';

  status: string = 'Available';

  btnclick: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.btnclick = false;
    }, 2000);
  }
  ontogle() {
    if (this.status == 'Available') {
      this.status = 'Not Available';
    } else {
      this.status = ' Available';
    }
  }
}
