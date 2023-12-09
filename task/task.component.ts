import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  data: any[];

  constructor(private dataService: DataService,private router:Router) {
    this.data = this.dataService.getAllData();
  }

  deleteItem(id: number): void {
    this.dataService.deleteData(id);
    this.data = this.dataService.getAllData();
  }


  navigateToAddUser(): void {
    this.router.navigate(['/adduser']);
  }
  navigateToview():void {    this.router.navigate(['/details']);}
    
  toggleEdit(item: any): void {
    item.editing = true;
  }

  saveEdit(item: any): void {
    this.dataService.editData(item.id, item.name, item.city);
    item.editing = false;
  }

  cancelEdit(item: any): void {
    item.editing = false;
    item.name = this.dataService.getAllData().find(x => x.id === item.id)?.name;
    item.city = this.dataService.getAllData().find(x => x.id === item.id)?.city;
  }
}