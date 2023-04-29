import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'products', component:ProductsComponent},
  {path:'users', component:UserComponent},
  {path:'posts', component:PostComponent},
  {path:'posts/:id', component:PostCommentsComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
