import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  public personas: any = [];
  public persona: any = {}; 

  constructor(private http:HttpClient) { 
    this.traerPersonas().subscribe(data => {
      this.personas = data;
    });
  } //hhtp solo es un nombre

  public traerPersonas(){
    return this.http.get("http://www.mocky.io/v2/5cd5cb902e0000a16952786e");//obtenemos un observable
  }

  public setPersona(id){
    this.persona = this.personas[id - 1];
  }

  public getPersona(){
    return this.persona;
  }
}
