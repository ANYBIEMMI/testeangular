import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { HomeComponent } from './view/home/home.component';
import { ProdutosComponent } from './view/produtos/produtos.component';
import { AgendamentoComponent } from './view/agendamento/agendamento.component';
import { ServicosComponent } from './view/servicos/servicos.component';
import { ContatoComponent } from './view/contato/contato.component';
import { LoginComponent } from './view/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
         FooterComponent,
         NavComponent,
         HomeComponent,
         ProdutosComponent,
         AgendamentoComponent,
         ServicosComponent,
         ContatoComponent,
         LoginComponent,
        

         
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
