import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 public  welcomeMessage:String = "Welcome to Alcon Pillar";
 public tournamentDescription:String = 'Compete like a champion and rise to the top with our'+
 +'tournament app the ultimate platform for adrenaline-fueled'
 +'battles and victorious triumphs.';

}
