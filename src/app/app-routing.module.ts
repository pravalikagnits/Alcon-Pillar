import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTournamentComponent } from './views/add-tournament/add-tournament.component';
import { EditTournamentComponent } from './views/edit-tournament/edit-tournament.component';
import { HomeComponent } from './views/home/home.component';
import { TournamentComponent } from './views/tournament/tournament.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'tournamentsList', component: TournamentComponent, data: { title: 'Tournament' } },
  { path: 'displayAddTournament', component: AddTournamentComponent, data: { title: 'Add Tournament' } },
  { path: 'displayEditTournament', component: EditTournamentComponent, data: { title: 'edit Tournament' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
