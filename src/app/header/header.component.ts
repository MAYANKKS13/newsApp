import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private services:NewsapiservicesService) {}

  topHeadingDisplay:any = [];

  ngOnInit(): void {
      
     this.services.topHeading().subscribe((result)=>{
      console.log(result)
      this.topHeadingDisplay = result.articles;
      
     })

  }

}
