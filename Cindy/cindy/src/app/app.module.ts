import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './component/users/users.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, UserdetailComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
})
export class AppModule {}
