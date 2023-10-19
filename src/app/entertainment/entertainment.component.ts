import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit{

  constructor(private services:NewsapiservicesService) {}

  entertainmentNewsDisplay:any = [];

  ngOnInit(): void {
      
     this.services.entertainmentNews().subscribe((result)=>{
      console.log(result)
      this.entertainmentNewsDisplay = result.articles;
      
     })

  }

}
