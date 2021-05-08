import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./view/home/home.component"
import {ProdutosComponent} from "./view/produtos/produtos.component"
import {AgendamentoComponent} from "./view/agendamento/agendamento.component"
import {ServicosComponent} from "./view/servicos/servicos.component"
import {LoginComponent} from "./view/login/login.component"
import {ContatoComponent} from "./view/contato/contato.component"




const routes: Routes = [
  {
  path:"",
  component:HomeComponent
},
{
path:"produtos",
component:ProdutosComponent
},
{path:"contato",
component:ContatoComponent

},
{
  path:"agendamento",
  component:AgendamentoComponent
},
{
  path:"servicos",
  component:ServicosComponent
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
