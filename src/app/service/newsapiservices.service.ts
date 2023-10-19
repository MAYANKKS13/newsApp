import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2c80c93197344ed086917a1d27f82dfc";

  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=2c80c93197344ed086917a1d27f82dfc";

  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2c80c93197344ed086917a1d27f82dfc";

  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=2c80c93197344ed086917a1d27f82dfc";

  entertainmentApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=2c80c93197344ed086917a1d27f82dfc";

  healthApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=2c80c93197344ed086917a1d27f82dfc";

  scienceApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=2c80c93197344ed086917a1d27f82dfc";



  topHeading():Observable<any>
  {
     return this.http.get(this.newsApiUrl);
  }


  techNews():Observable<any>
  {
    return this.http.get(this.techApiUrl);
  }

  businessNews():Observable<any>
  {
    return this.http.get(this.businessApiUrl);
  }

  sportsNews():Observable<any>
  {
    return this.http.get(this.sportsApiUrl);
  }

  entertainmentNews():Observable<any>
  {
    return this.http.get(this.entertainmentApiUrl);
  }

  healthNews():Observable<any>
  {
    return this.http.get(this.healthApiUrl);
  }

  scienceNews():Observable<any>
  {
    return this.http.get(this.scienceApiUrl);
  }




}
