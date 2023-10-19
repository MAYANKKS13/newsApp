import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit{

  constructor(private services:NewsapiservicesService) {}

  scienceNewsDisplay:any = [];

  ngOnInit(): void {
      
     this.services.scienceNews().subscribe((result)=>{
      console.log(result)
      this.scienceNewsDisplay = result.articles;
      
     })

  }

}
