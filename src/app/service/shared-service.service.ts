import { Injectable } from '@angular/core';
import { BloodGroup } from '../model/blood-group';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { District } from '../model/district';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  url: string="http://localhost:8080/";
  bloodGroup:BloodGroup;
  district: District;

  constructor(private http:HttpClient) { }

  getDistricts():Observable<District>
  {
    return this.http.get<District>(this.url+'districts');
  }

  getBloodGroup():Observable<BloodGroup>
  {
    return this.http.get<BloodGroup>(this.url+'bloodtypes');
  }
}
