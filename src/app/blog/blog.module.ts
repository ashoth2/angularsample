import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { StoryComponent } from './story/story.component';
import { NewsComponent } from './news/news.component';
import { BloghomeComponent } from './bloghome/bloghome.component';


@NgModule({
  declarations: [
    StoryComponent,
    NewsComponent,
    BloghomeComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
