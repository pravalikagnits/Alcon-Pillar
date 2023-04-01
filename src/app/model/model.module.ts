import { NgModule } from '@angular/core';
import { TournamentRepository } from './tournament.repository';
import { HttpClientModule } from "@angular/common/http";
import { TournamentService } from '../services/tournament.service';


@NgModule({
  imports: [HttpClientModule],
  providers: [TournamentRepository, TournamentService]
})
export class ModelModule { }