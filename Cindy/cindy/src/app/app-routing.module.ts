import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { UsersComponent } from './component/users/users.component';
import { AddPostComponent } from './component/add-post/add-post.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserdetailComponent },
  { path: 'addBook', component: AddPostComponent},
  { path: '**', redirectTo:'users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
