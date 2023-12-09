import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user: any ;
 
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    const userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log('userId:', userId);
    this.getUserDetails(userId);
  }

  getUserDetails(userId: number): void {
    this.user = this.dataService.getUserById(userId);
    console.log('user:', this.user);
  }
}