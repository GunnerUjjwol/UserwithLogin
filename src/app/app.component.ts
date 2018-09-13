import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './service/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bbplus';

  loginToken: string = null;

  constructor(private router: Router, private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.loginToken = sessionStorage.getItem('token');
    if (this.loginToken == null || this.loginToken === '') {
      this.router.navigate(['/login']);
    }
    this.tokenService.tokenEmitter.subscribe(token => {
      this.loginToken = token;
      if (this.loginToken == null || this.loginToken === '') {
        this.router.navigate(['/login']);
      }
    });
  }
}
