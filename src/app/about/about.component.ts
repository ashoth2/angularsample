import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FinanceComponent } from '../finance/finance.component';
import { SalesComponent } from '../sales/sales.component';
import { ManagementComponent } from '../management/management.component';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  show:boolean=false;

 details=[{name:" Wildlife refers to undomesticated animal species, but has come to include all organisms that grow or live wild in an area without being introduced by humans"},]

  constructor(private router: Router, public dialog:MatDialog) { }

  opendialog()
  {
    this.dialog.open(FinanceComponent);
  }

  opendialogsales()
  {
    this.dialog.open(SalesComponent);
  }

  opendialogmanage()
  {
    this.dialog.open(ManagementComponent);
  }

  ngOnInit(): void {
  }

  gotologin(){
this.router.navigate(['/login'])
  }

  gotofinance()
  {
    this.router.navigate(['/finance'])
  }

  

  onclick() {

    this.show=true;

  }

  onhide(){

    this.show=false;

  }

}
