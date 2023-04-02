import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  'title': string;
  'isLoggedIn': boolean;

  ngOnInit(): void {
    this.isLoggedIn = false;
  }
}
