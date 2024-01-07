import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoglalasoklistazasaComponent } from './foglalasoklistazasa/foglalasoklistazasa.component';
import {UjFoglalasokfelveteleComponent} from './ujfoglalasokfelvetele/ujfoglalasokfelvetele.component'


const routes: Routes = [
  {path:"home", component:HomeComponent, 
    children:[
      {path:"foglalasok", component:FoglalasoklistazasaComponent},
      {path:"ujfoglalasokfelvetele", component:UjFoglalasokfelveteleComponent},
    ]
  },
  {path:"", redirectTo:"/home", pathMatch:"full"},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }