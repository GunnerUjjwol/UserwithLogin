import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private baseUrl: string = "http://localhost:8080";
  private event=new Event();


  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get(this.baseUrl + '/events');
  }

  setter(event: Event){
    this.event = event;
  }
  
  getter(){
    return this.event;
  }
}
