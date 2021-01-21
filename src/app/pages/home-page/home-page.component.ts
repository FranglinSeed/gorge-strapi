import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../kaitiaki/_services/auth.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  userName:string = '';

  constructor( private AS:AuthService ) { }

  ngOnInit(): void {

    // this.AS.userInfo.subscribe(value => {
    //   if(value){
    //    this.userName = value.username;
    //   }
    // });
    
  }

}
