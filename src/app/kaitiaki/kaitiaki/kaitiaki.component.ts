import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-kaitiaki',
  templateUrl: './kaitiaki.component.html',
  styleUrls: ['./kaitiaki.component.scss']
})

export class KaitiakiComponent implements OnInit {

  constructor( private AS:AuthService ) { }

  public LoggedIn = this.AS.isLoggedIn

  ngOnInit(): void {
  }

  logout(){
    this.AS.logout()
  }

}
