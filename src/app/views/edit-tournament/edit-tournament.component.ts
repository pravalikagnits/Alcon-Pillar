import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tournament } from 'src/app/model/tournament.model';
import { TournamentRepository } from 'src/app/model/tournament.repository';

@Component({
  selector: 'app-edit-tournament',
  templateUrl: './edit-tournament.component.html',
  styleUrls: ['./edit-tournament.component.css']
})
export class EditTournamentComponent implements OnInit {
  editMode: boolean = false;
  tournament: Tournament = new Tournament();
  constructor(private repository: TournamentRepository, private router: Router, activeRoute: ActivatedRoute) {
    this.editMode = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.editMode) {
      repository
        .getTournament(activeRoute.snapshot.params['_id'])
        .subscribe((data) => (this.tournament = data));
    }
  }

  ngOnInit(): void {

  }

}
