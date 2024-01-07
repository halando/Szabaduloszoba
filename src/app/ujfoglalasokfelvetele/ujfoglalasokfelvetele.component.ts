import { Component } from '@angular/core';
import { Foglalas } from '../Foglalas';
import { BaseService } from '../base.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-ujfoglalasok',
  templateUrl: './ujfoglalasokfelvetele.component.html',
  styleUrls: ['./ujfoglalasokfelvetele.component.css']
})
export class UjFoglalasokfelveteleComponent {
  actReservation:any
  sorok:any
  valid:boolean=false
  constructor(private base:BaseService){
    this.actReservation= new Foglalas()
    this.sorok=base.getSorok()
    this.actReservation.datum = formatDate(Date.now(),"yyyy-MM-dd",'en-US')
  }

  check(){
    if ( this.actReservation.cim!="" 
      && this.actReservation.fo >=2 && this.actReservation.fo<=16 
      && this.actReservation.iranyitoszam!="" && this.actReservation.nev!="") {
        this.valid=true
        this.reserve()
      return true
    }else{
      this.valid=false
      return false}
    
  }
  reserve(){
    this.base.postFoglalasok(this.actReservation)
  }
}