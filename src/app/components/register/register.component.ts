import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';
import { UserServiceService } from '../../service/user-service.service';
import { Router } from '@angular/router';
import { BloodGroup } from '../../model/blood-group';
import { District } from '../../model/district';
import { SharedServiceService } from '../../service/shared-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: any;
  bloodGroup: BloodGroup;
  district: District;
  bloodId:any;
  disId:any;
  selectedB: number = 1;
  selectedD: number = 12;
  registerType: string;

  constructor(private userService: UserServiceService, private router: Router, private sharedService: SharedServiceService){}
  

  ngOnInit() {


    this.user=this.userService.getter();

    if (this.user.userId == undefined)
    this.registerType="Register";
    else
    this.registerType="Update Profile";

    if(this.user.userId != undefined){
      this.selectedB = this.user.bloodGroup.bloodGroupId;
      this.selectedD = this.user.district.districtId;
    }

    this.sharedService.getBloodGroup()
    .subscribe((res) => {
      console.log(res);
      this.bloodGroup = res;
      this.user.bloodGroupId=this.bloodGroup.bloodGroupId;
  
    }

  )

    this.sharedService.getDistricts()
    .subscribe((val) => {
      console.log(val);
      this.district = val;
    this.user.districtId=this.district.districtId;
    }
  )
   }

  onClickSubmit() {
    if (this.user.userId == undefined){
    this.user.bloodGroupId=this.selectedB;
    this.user.districtId=this.selectedD;
     this.userService.createUser(this.user).subscribe(
        () => {
          console.log(this.user);
          this.router.navigate(['/']);
        },(error) => {
          console.log(error);
        });
    }else{
      this.user.bloodGroup.bloodGroupId = this.selectedB;
      this.user.district.districtId=this.selectedD;
      this.userService.updateUser(this.user).subscribe(
        (user) => {
          console.log(user);
          this.router.navigate(['/userinfo']);
        }, (error) => {
          console.log(error);
        });
    }
   }

}
