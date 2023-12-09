import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { TaskComponent } from './task/task.component';
const routes: Routes = [
    // Other routes
    { path: 'details', component: DetailsComponent },
    { path: 'adduser', component: AddUserComponent },
    { path: 'task', component: TaskComponent },
  ];

@NgModule({imports:[  RouterModule.forRoot(routes)]
 
})
export class AppRoutingModule { }