import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User1 } from '../user1';

import { Usermodel } from './usermodel.model';
import { UsersService } from './users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
@ViewChild('userData') userForm:NgForm;
public isEdit= false;
public isPrint = true;
public model:User1= new User1();
  
  public userList:Usermodel[] = [];
  constructor(private usersService:UsersService) { }
  
  

  ngOnInit(): void {
    this.userList=this.usersService.getUser()
  }
  
  onSubmit(f:NgForm){
    this.usersService.addUser(f);
    f.resetForm()
   
  }

  deleteRow(i:any){
    this.userList.splice(i,1);
  }

  editRow(i:any){
    var rowToUpdate = this.userList[i];
    this.userForm.setValue({
      userName : rowToUpdate.userName,
      email: rowToUpdate.email,
      address: rowToUpdate.address,
      city:rowToUpdate.city,
      contact:rowToUpdate.contact
    })
    this.isEdit = true;
    (document.getElementById("userName") as HTMLInputElement).disabled = true;
  }

  update() {
    const userName = this.userForm.value.userName;
    const email = this.userForm.value.email;
    const address = this.userForm.value.address;
    const city = this.userForm.value.city;
    const contact = this.userForm.value.contact;
    const contact1 = (document.getElementById("contact") as HTMLInputElement).value
    if (userName!="" && email!="" && address!="" && city!="" && contact1!="") {
      
   

    
    var foundUser:any = this.userList.find(function(user:Usermodel){
        return user.userName==userName;
    });
    foundUser.email = email;
    foundUser.address = address;
    foundUser.city = city;
    foundUser.contact = contact;
   
    
    this.userForm.resetForm();
    (document.getElementById("userName") as HTMLInputElement).disabled = false;
    
   this.isEdit= false;
  
  }
  }
  print(){
  //  var table =  this.userList
  //  var i;
  //  for(i=0;i<table.length;i++){
  //   var removeObject = table[i]
  //   delete removeObject.contact
    

     
  //  }
   this.isPrint = false;

  }


}
