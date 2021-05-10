import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./view/home/home.component"

import {AgendamentoComponent} from "./view/agendamento/agendamento.component"

import {LoginComponent} from "./view/login/login.component"
import {ContatoComponent} from "./view/contato/contato.component"




const routes: Routes = [
  {
  path:"",
  component:HomeComponent
},

{path:"contato",
component:ContatoComponent

},
{
  path:"agendamento",
  component:AgendamentoComponent
},

{
  path:"login",
  component:LoginComponent
}

]  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
