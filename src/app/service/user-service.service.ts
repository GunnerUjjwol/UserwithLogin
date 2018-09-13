import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl: string = "http://localhost:8080";
  private user=new User();

  constructor(private http: HttpClient) { }

getUser(id: number):Observable<User>{
  return this.http.get<User>(this.baseUrl + '/users/' + id);
}


deleteUser(id: number){
  return this.http.delete(this.baseUrl + '/userDelete/' + id);
}

createUser(user: User){
 // console.log(user);
  return this.http.post(this.baseUrl + '/saveUser', user);
}

updateUser(user: User) {
  return this.http.put(this.baseUrl + '/updateUser', user);
}

setter(user: User){
  this.user = user;
}

getter(){
  return this.user;
}

}