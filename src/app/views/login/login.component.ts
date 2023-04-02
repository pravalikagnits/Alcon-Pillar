import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  'title': string;

  constructor(private route: ActivatedRoute){}

  ngOnInit():void{
    this.title =this.route.snapshot.data['title'];}


}
