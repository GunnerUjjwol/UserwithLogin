import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit() {
  }

  login(): void {
    const loginToken = btoa(`${this.username}:${this.password}`);
    sessionStorage.setItem('token', loginToken);
    this.router.navigate(['/']);
    this.tokenService.tokenEmitter.next(loginToken);
  }
}
