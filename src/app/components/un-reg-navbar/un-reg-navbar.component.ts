import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-reg-navbar',
  templateUrl: './un-reg-navbar.component.html',
  styleUrls: ['./un-reg-navbar.component.css']
})
export class UnRegNavbarComponent implements OnInit {

  loginToken: string = null;
  
  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit() {
    this.loginToken = sessionStorage.getItem('token');
    this.tokenService.tokenEmitter.subscribe(token => {
      this.loginToken = token;
    });
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.tokenService.tokenEmitter.next(null);
  }
}
