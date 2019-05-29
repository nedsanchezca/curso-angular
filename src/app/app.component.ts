import { Component } from '@angular/core';
import { PersonaService } from './servicios/persona.service'

@Component({
  selector: 'app-root', //como lo puedo usar directamente desde html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';
  show:boolean = false;

  personas:any;

  constructor(private servicio:PersonaService) { }

  public traerPersonas(){
    this.servicio.traerPersonas().subscribe(data => {
      console.log(data);
      this.show = true;
      this.personas = data;
    });
  }
    
}
