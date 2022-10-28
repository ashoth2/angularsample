import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloghomeComponent } from './bloghome/bloghome.component';
import { NewsComponent } from './news/news.component';
import { StoryComponent } from './story/story.component';

// const routes: Routes = [
//   {path:'',component:BloghomeComponent},
//   {path:'story',component:StoryComponent},
//   {path:'news',component:NewsComponent},
// ];

const routes:Routes =[
  {
    path:"",component:BloghomeComponent,
    children:[
      {path:'story',component:StoryComponent},
         {path:'news',component:NewsComponent}
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
