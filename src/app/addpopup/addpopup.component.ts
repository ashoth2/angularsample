import { createInjectableType } from '@angular/compiler';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-addpopup',
  templateUrl: './addpopup.component.html',
  styleUrls: ['./addpopup.component.css']
})
export class AddpopupComponent implements OnInit {
  editdata:any;

  constructor(private builder:FormBuilder,private dialog:MatDialog,private api:ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data.id!='' && this.data.id!='')
    {
      this.api.Getproductbycode(this.data.id).subscribe(response => {
        this.editdata = response;
        this.productform.setValue({
          id: this.editdata.id, productname: this.editdata.productname, price: this.editdata.price,
          quantity: this.editdata.quantity, remarks: this.editdata.remarks
        });
      });
    }
  }

  productform=this.builder.group({

    id:this.builder.control({value:'',disabled:true}),
    productname:this.builder.control('',Validators.required),
    price:this.builder.control('',Validators.required),
    quantity:this.builder.control('',Validators.required),
    remarks :this.builder.control('',Validators.required),

  });

  Saveproduct() {
    if (this.productform.valid) {
      const Editid = this.productform.getRawValue().id;
      if (Editid != '' && Editid != null) {
        this.api.Updateproduct(Editid, this.productform.getRawValue()).subscribe(response => {
          this.closepopup();
          alertify.success("Updated successfully.")
        });
      } else {
        this.api.Createproduct(this.productform.value).subscribe(response => {
          this.closepopup();
          alertify.success("Saved successfully.")
        });
      }
    }
  }

  closepopup() {
    this.dialog.closeAll();
  }
  

  }




