import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTournamentComponent } from './views/add-tournament/add-tournament.component';
import { EditTournamentComponent } from './views/edit-tournament/edit-tournament.component';
import { HomeComponent } from './views/home/home.component';
import { TournamentComponent } from './views/tournament/tournament.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'tournaments',
    
    children:[
      {
        path:'',
        component: TournamentComponent,
        data: { title: 'Tournament' },
      },
      {
        path: 'add',
        component: AddTournamentComponent,
        data: { title: 'Add Tournament' }
      },
      {
        path: ':id',
        component: EditTournamentComponent,
        data: { title: 'Edit Tournament' }
      },
    ]
  },
  { path: 'login', 
  component: LoginComponent,
   data: { title: 'Login' } 
  },
  { path: 'register', 
   component: LoginComponent,
   data: { title: 'Login' } 
  },
  { path: '', 
    redirectTo: '/home',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
