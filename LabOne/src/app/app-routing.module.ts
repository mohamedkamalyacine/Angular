import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { CommentComponent } from './comment/comment.component';
import { DiscountComponent } from './discount/discount.component';
import { NoDiscountComponent } from './no-discount/no-discount.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {
    path:'products',
    component:ProductsComponent,
    children:[
      {path:'discounts', component:DiscountComponent},
      {path:'noDiscounts', component:NoDiscountComponent}
    ]
  },
  {path:'users', component:UserComponent},
  {path:'posts', component:PostComponent},
  {
    path:'posts/:id',
    component:PostCommentsComponent,
    children:[
      {path:'comments', component:CommentComponent}
    ]
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(a=>a.AuthModule)
  },
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }