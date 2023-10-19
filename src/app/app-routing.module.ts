import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';

const routes: Routes = [
  {path:'', component:HeaderComponent},
  {path:'technology', component:TechnewsComponent},
  {path:'business', component:BusinessnewsComponent},
  {path:'sports', component:SportsnewsComponent},
  {path:'entertainment', component:EntertainmentComponent},
  {path:'health', component:HealthComponent},
  {path:'science', component:ScienceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
