import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxStarRatingModule } from 'ngx-star-rating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { AddPostComponent } from './component/add-post/add-post.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { UsersComponent } from './component/users/users.component';

import { CommentsModule } from './comments.module';
import { NavComponent } from './auth/nav/nav.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { Filter2Pipe } from './shared/filter2.pipe';
import { ProductsComponent } from './component/products/products.component';
import { RatingfeatureComponent } from './components/ratingfeature/ratingfeature.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentsComponent } from './components/comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AddPostComponent,
    FooterComponent,
    HeaderComponent,
    UserdetailComponent,
    UsersComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent,
    CartComponent,
    ProductsComponent,
    Filter2Pipe,
    RatingfeatureComponent,
    CommentComponent,
    CommentFormComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    CommentsModule,
    ReactiveFormsModule,
    NgxStarRatingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
