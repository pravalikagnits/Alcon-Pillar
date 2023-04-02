import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTournamentComponent } from './views/add-tournament/add-tournament.component';
import { EditTournamentComponent } from './views/edit-tournament/edit-tournament.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { TournamentComponent } from './views/tournament/tournament.component';
import { LoginComponent } from './views/login/login.component';


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
