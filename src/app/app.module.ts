import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { SegundaTelaComponent } from './pages/segunda-tela/segunda-tela.component';
import { LoginComponent } from './pages/login/login.component';
import { BrunoComponent } from './telas/bruno/bruno.component';
import { HomeComponent } from './telas2/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    SegundaTelaComponent,
    LoginComponent,
    BrunoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
