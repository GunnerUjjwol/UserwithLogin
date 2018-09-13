import { Component, OnInit } from '@angular/core';
import { BloodRequest } from '../../../model/blood-request';
import { BloodRequestService } from '../../../service/blood-request.service';

@Component({
  selector: 'app-add-blood-request',
  templateUrl: './add-blood-request.component.html',
  styleUrls: ['./add-blood-request.component.css']
})
export class AddBloodRequestComponent implements OnInit {

  public bloodRequest: BloodRequest;

  constructor(private bloodRequestService: BloodRequestService) { }

  ngOnInit() {
  }

  
}
