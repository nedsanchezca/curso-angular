import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../servicios/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public persona:any = {};

  constructor(private servicio:PersonaService) { }

  ngOnInit() {
    this.persona = this.servicio.getPersona();
  }

}
