import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tournament } from 'src/app/model/tournament.model';
import { TournamentRepository } from 'src/app/model/tournament.repository';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent  implements OnInit{
  constructor(private repository: TournamentRepository, private router: Router, private tournament: Tournament) { }
  ngOnInit(): void {
  }
  addTournament(form: NgForm) {
    if (form.valid) {
      this.repository.addTournament(this.tournament).subscribe(data => {
        console.log(data);
      });
    }
  }

}
