import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Foglalas } from '../Foglalas';

@Component({
  selector: 'app-foglalasoklistazasa',
  standalone: true,
  imports: [],
  templateUrl: './foglalasoklistazasa.component.html',
  styleUrl: './foglalasoklistazasa.component.css'
})
export class FoglalasoklistazasaComponent {
foglalasok:any
sorok:any
constructor(private base:BaseService){
  this.base.getFoglalasok().subscribe((res:any)=>this.foglalasok=this.sortByDateDesc(res))
  this.sorok=base.getSorok()
  
  

}
sortByDateDesc(myList:Array<Foglalas>){
  return myList.sort((a,b)=>{
    return new Date(b.datum).getTime() - new Date(a.datum).getTime()
  })
}
}
