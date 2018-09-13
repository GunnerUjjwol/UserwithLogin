import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserServiceService } from '../../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

 public user: User;

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.userService.getUser(21).subscribe((res) => {
      console.log(res);
      this.user = res;
    },(error) => {
      console.log(error);
    })
  }

  updateUser(user) {
    this.userService.setter(user);
    this.router.navigate(['/register']);
  }

}
