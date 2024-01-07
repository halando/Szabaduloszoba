import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Foglalas } from './Foglalas';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private columns:Array<Object>=[
    // {key:"id", text:"Id", type:"plain"},
    {key:"datum", text:"Dátum", type:"date"},
    {key:"nev", text:"Név", type:"text"},
    {key:"fo", text:"Fő", type:"number"},
    {key:"cim", text:"Helyszín", type:"text"},
    {key:"iranyitoszam", text:"Irányítószám", type:"number"},
  ]

  private url="http://localhost:3000/foglalasok"
  private reservationsList= new BehaviorSubject<any>([])
  constructor(private http:HttpClient, private router:Router) { 
    this.loadFoglalasok()
  }

  private loadFoglalasok(){
    return this.http.get(this.url,).subscribe({
      next:(res)=>{
        this.reservationsList.next(res)
      },
      error:(err)=>console.log("Error in get ",err),
    })
  }
  getFoglalasok(){
    return this.getFoglalasok
  }
  getSorok(){
    return this.getSorok
  }
  postFoglalasok(body:Foglalas){
    this.http.post(this.url,body).subscribe({
      next:(res)=>{
        console.log("successfull post")
        this.loadFoglalasok()
        this.router.navigate(["/home/foglalasok"])
      },
      error:(err)=>console.log("Error in post ",err)
    })
  }
}