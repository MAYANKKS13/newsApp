import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit{

  constructor(private services:NewsapiservicesService) {}

  healthNewsDisplay:any = [];

  ngOnInit(): void {
      
     this.services.healthNews().subscribe((result)=>{
      console.log(result)
      this.healthNewsDisplay = result.articles;
      
     })

  }

}
