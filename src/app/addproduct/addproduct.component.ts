import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddpopupComponent } from '../addpopup/addpopup.component';
import { productmodel } from '../productmodel/productmodel';
import { ApiService } from '../services/api.service';
import * as alertify from 'alertifyjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';




@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  @ViewChild(MatPaginator) _paginator!:MatPaginator;
  @ViewChild(MatSort) _sort!:MatSort;
  productdata!: productmodel[];
  finaldata:any;


  constructor( private dialog:MatDialog,private api:ApiService) { }



  ngOnInit(): void {
    this.Loadproduct();
  }

  displayedColumns:string[]=["productname","price","quantity","remarks","action"];
 

  openpopup(id:any)
  {
   const _popup = this.dialog.open(AddpopupComponent,{
      width:'500px',
      exitAnimationDuration:'1000ms',
      enterAnimationDuration:'1000ms',
      data:{
        id:id
      }
    })
    _popup.afterClosed().subscribe(r => {
      this.Loadproduct();
    });
  }

  Loadproduct() {
    this.api.Getallproduct().subscribe(response => {
     this.productdata=response;
     this.finaldata=new MatTableDataSource<productmodel>(this.productdata);
     this.finaldata.paginator=this._paginator;
     this.finaldata.sort=this._sort;
      
    });
  }

  Editproduct(id:any)
  {
    this.openpopup(id);
  
  }
  Removeproduct(id:any)
  {
    alertify.confirm("Remove Product", "do you want remove this Product?", () => {
      this.api.Removeproductbycode(id).subscribe(r => {
        this.Loadproduct();
      });
    }, function () {

    })

  }

}
