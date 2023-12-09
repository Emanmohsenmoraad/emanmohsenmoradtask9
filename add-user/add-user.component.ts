import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  newUser: any = {id:'',name:'',city:''};

  constructor(private router: Router, private dataService: DataService) { }

  addUser(): void {
    this.dataService.addUser(this.newUser);
    this.router.navigate(['/']);
}
onFileSelected(event: any): void {
  const file: File = event.target.files[0];
  this.newUser = this.dataService. setUploadedFile(file);
  }

}