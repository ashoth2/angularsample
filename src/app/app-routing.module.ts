import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddcartComponent } from './addcart/addcart.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { BlogModule } from './blog/blog.module';
import { ContactComponent } from './contact/contact.component';
import { FinanceComponent } from './finance/finance.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',component:ProductComponent},
  {path:'addcart',component:AddcartComponent},
  {path:'finance',component:FinanceComponent},
  {path:'sign up',component:RegisterComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'blog', loadChildren: () => import('./blog/blog.module').then (m => BlogModule)}
  
  // {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
