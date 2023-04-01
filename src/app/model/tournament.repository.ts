import { Injectable } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
import { Tournament } from './tournament.model';

@Injectable()
export class TournamentRepository {
  private tournaments: Tournament[] = [];
  private authors: string[] = [];
  constructor(tournamentService: TournamentService) {
    tournamentService.getTournamentList().subscribe((data)=>{
      this.tournaments = data;
    });
  }
  getTournaments(): Tournament[] {
    return this.tournaments;
  }
//   getBook(id: number): Book {
//     return (this.books.find(b => b._id === id)!);
//   }
//   getAuthors(): string[] {
//     return this.authors;
//   }
}
