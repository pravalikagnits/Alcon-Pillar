import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournamentComponent } from './views/tournament/tournament.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HeaderComponent } from './views/partials/header/header.component';
import { FooterComponent } from './views/partials/footer/footer.component';
import { ModelModule } from './model/model.module';

@NgModule({
  declarations: [
    AppComponent,
    TournamentComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
