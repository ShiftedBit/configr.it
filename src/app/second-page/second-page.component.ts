import { AuthService } from './../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
