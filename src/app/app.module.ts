import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';
import { MiddleComponent } from './middle/middle.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { ProductComponent } from './product/product.component';
import { AddcartComponent } from './addcart/addcart.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FinanceComponent } from './finance/finance.component';
import { SalesComponent } from './sales/sales.component';
import { ManagementComponent } from './management/management.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddpopupComponent } from './addpopup/addpopup.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    LeftComponent,
    MiddleComponent,
    HomeComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    CustomdirectiveDirective,
    ProductComponent,
    AddcartComponent,
    FinanceComponent,
    SalesComponent,
    ManagementComponent,
    AddproductComponent,
    AddpopupComponent,
    


    
   
   

  ],
entryComponents: [FinanceComponent,SalesComponent,ManagementComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule
    


    // SalesComponent
  ],
  exports:[
    // MatInputModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatButtonModule,
    // MatCheckboxModule,
    // MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
