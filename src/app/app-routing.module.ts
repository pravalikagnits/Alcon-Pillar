import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TournamentComponent } from './views/tournament/tournament.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'tournamentsList', component: TournamentComponent, data: { title: 'Tournament' } },
  { path: 'loginpage', component: LoginComponent, data: { title: 'Login' } },
  // { path: 'bookList', component: BookStoreComponent, data: { title: 'Book Store' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
