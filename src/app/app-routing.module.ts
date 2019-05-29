import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { PersonaComponent } from './componentes/persona/persona.component';

const routes: Routes = [{ path: 'formulario', component: FormularioComponent },
                        { path: 'persona', component: PersonaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
