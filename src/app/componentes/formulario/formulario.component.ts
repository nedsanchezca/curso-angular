import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { PersonaService } from '../../servicios/persona.service';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, OnChanges {

  @Input() id: string;
  @Input() first_name: string;
  @Input() last_name: string;

  public personas:any = [];
  public persona:any = {};

  constructor(private servicio:PersonaService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }

  //public selectPersona(persona){
  //  let i = persona.target.value;
  //  this.persona =this.personas[i -1];
  //}

  public mostrar() {
    this.servicio.setPersona(this.persona.id);
    console.log(this.persona.id);
  }

  public selectPersona(){
    
  }

}
