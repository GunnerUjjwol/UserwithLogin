import { Component, OnInit } from '@angular/core';
import { BloodGroup } from '../../model/blood-group';
import { SharedServiceService } from '../../service/shared-service.service';
import { BloodRequest } from '../../model/blood-request';
import { BloodRequestService } from '../../service/blood-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

public bloodRequest: any;
bloodGroup: BloodGroup;
selectType: number=1;
requestType;

  constructor(private sharedService:SharedServiceService, private bloodRequestService: BloodRequestService, private router: Router) { }

  ngOnInit() {

    this.bloodRequest = this.bloodRequestService.getter();
    if (this.bloodRequest.bloodRequestId == undefined)
    this.requestType="Request Blood";
    else
    this.requestType="Update Request";
    this.sharedService.getBloodGroup()
    .subscribe((res) => {
      console.log(res);
      this.bloodGroup = res;
      this.bloodGroup.bloodGroupId=this.bloodGroup.bloodGroupId;
    }
  )
  }

  requestForm(){
    if(this.bloodRequest.bloodRequestId == undefined){
      this.bloodRequest.bloodGroupId = this.selectType;


      this.bloodRequestService.createBloodRequest(this.bloodRequest).subscribe(() => 
      {
        console.log(this.bloodRequest);
        this.bloodRequest.setter(new BloodRequest());
        this.router.navigate(['/userrequest'])
     },
        (error) => {
        console.log(error);
         })


         
    }
    else {
      this.bloodRequest.bloodGroup.bloodGroupId = this.selectType;
      this.bloodRequestService.updateBloodRequest(this.bloodRequest)
        .subscribe((bloodRequest) => {
          console.log(bloodRequest);
          location.reload();
          this.bloodRequestService.setter(new BloodRequest());
          // this.router.navigate(['/userrequest']);
        }, (error) => {
          console.log(error);
        });
    }
    }
  }
