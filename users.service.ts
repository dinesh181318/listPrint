import {  Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usermodel } from './usermodel.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  

  public userServiceList:Usermodel[]=[
    new Usermodel('Dinesh','ddd@gmail','12 nagar','vpm',61625525),
    new Usermodel('praveen','ppp@gmail','13 nagar','vpm',61625525),
    new Usermodel('hari','hhh@gmail','14 nagar','vpm',61625525),
    new Usermodel('sai','sss@gmail','14 nagar','vpm',61625525),
  ]

  constructor() { }

getUser(){
  return this.userServiceList
}

addUser(form:NgForm){
  this.userServiceList.push(
    {"userName":form.value.userName,
  "email":form.value.email,
  "address":form.value.address,
  "city":form.value.city,
  "contact":form.value.contact}
  );
 


}




}


