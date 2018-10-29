import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  { path: '', component: NewComponent },
  { path: 'comments', component: CommentsComponent}
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ 
    RouterModule.forRoot(routes) 
  ]
})
export class AppRoutingModule {

}