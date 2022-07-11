import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { AddPostComponent } from './component/add-post/add-post.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { UsersComponent } from './component/users/users.component';

import { CommentsModule } from './comments.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AddPostComponent,
    FooterComponent,
    HeaderComponent,
    UserdetailComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    CommentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
