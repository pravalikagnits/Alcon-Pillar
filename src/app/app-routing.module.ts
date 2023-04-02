import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { TournamentComponent } from './views/tournament/tournament.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent, data: { title: 'Login', isLoggedIn : false } },
  { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'tournamentsList', component: TournamentComponent, data: { title: 'Tournament' } },
  // { path: 'bookList', component: BookStoreComponent, data: { title: 'Book Store' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
