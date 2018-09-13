import { Injectable } from '@angular/core';
import { BloodRequest } from '../model/blood-request';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodRequestService {
  private baseUrl: string = "http://localhost:8080/";
  private bloodRequest = new BloodRequest();

  constructor(private http: HttpClient) { }

  createBloodRequest(bloodRequest:BloodRequest){
    return this.http.post(this.baseUrl + 'saveBloodRequest', bloodRequest);
  }

  updateBloodRequest(bloodRequest: BloodRequest) {
    return this.http.put(this.baseUrl + 'updateRequest', this.bloodRequest);
  }

  getRequests() {
    return this.http.get(this.baseUrl + 'requests');
  }

  deleteBloodRequest(id: number) {
    return this.http.delete(this.baseUrl + 'requests/' + id);
  }

  getById(id: number):Observable<BloodRequest>{
    return this.http.get<BloodRequest>(this.baseUrl + 'requests/' + id)
  }

  setter(bloodRequest: BloodRequest){
    this.bloodRequest = bloodRequest;
  }

  getter(){
    return this.bloodRequest;
  }
}
