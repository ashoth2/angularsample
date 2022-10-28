import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../services/api.service';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
  form: any;
  submitted = false;
  loading = false;

  constructor(  
    private formBuilder: FormBuilder,private http : HttpClient,private api:ApiService ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.pattern("[A-Za-z\-_\.]{3,20}")]],
      lastName: ['', [Validators.required,Validators.pattern("[A-Za-z\-_\.]{1,20}")]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      address:['',Validators.required],
      role:['',Validators.required],
      status: ['', Validators.required],
      password: ['', [Validators.required,Validators.pattern("[A-Za-z0-9\@_\#]{8,15}")]],
      confirmpassword: ['', Validators.required]
  },
  {
    validators: this.mustmatch('password','confirmpassword')
  });
  }

  get f() { return this.form.controls; }

  mustmatch(controlename:string, matchingcontrolename:string)
  {
     return(formgroup:FormGroup)=>{
      const control = formgroup.controls[controlename];
      const matchingcontrol = formgroup.controls[matchingcontrolename];
      if(matchingcontrol.errors && !matchingcontrol.errors['mustmatch']){
           return
      }
      if(control.value !== matchingcontrol.value )
      {
          matchingcontrol.setErrors({mustmatch:true});
      }
      else{
        matchingcontrol.setErrors(null);
      }
     }
  }

  // onSubmit(){
  //   this.submitted = true;

  //   if (this.form.invalid) {
  //     return;
  //   }

  //   console.log(JSON.stringify(this.form.value, null, 2));
  // }

  // onReset(): void {
  //   this.submitted = false;
  //   this.form.reset();
  // }

  onSubmit()
  {
    this.http.post<any>("http://localhost:3000/Register",this.form.value)
    .subscribe(res=>{
      alert("save success");
      this.form.reset();
    })
    
    // this.api.addregister(this.form.value).subscribe(response => {  
    // alert("Saved successfully.");
    // this.form.reset();
   
    // });
      this.submitted = true;
      console.log (this.form);

      
      // alert ('Submited successfully');
      

    if (this.form.invalid) {
    return;
     }


    
    
  }

  }


