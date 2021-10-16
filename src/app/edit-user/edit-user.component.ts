import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { UserService } from '../shared/services/user.service';
import { UserSubjectsService } from '../shared/subject/user-subjects.service';
import { PeriodicElement } from '../table/table.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  myForm! : FormGroup;
  genders : string[] = ['male','female']
  patchData! : PeriodicElement;
  constructor(private fb:FormBuilder, public userService: UserService, 
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public userInfoService:UserSubjectsService,
    ) {
   this.patchData=data.pageValue;
  }
  
  ngOnInit(): void {
    this.userFormInit();
    this.myForm.patchValue({
      "name":this.data.pageValue['name'],
      "email":this.data.pageValue['email'],
      "address":this.data.pageValue['address'],
      "gender":this.data.pageValue['gender'],
    })
  }
  events: string[] = [];

  userFormInit(){
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gender: [''],
      dob: ['', [Validators.required]],
      address:['']
    })
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }


  onSubmit(){
    console.log(this.myForm.value);
    let obj= {
      "position": this.patchData.position,
      "key": this.patchData.key,
      "name": this.myForm?.get('name')?.value,
      "email": this.myForm?.get('email')?.value,
      "gender": this.myForm?.get('gender')?.value,
      "address": this.myForm?.get('address')?.value,
      "dob": "03/07/1998"
    }
    this.userService.patchData(this.patchData.key,obj)
                      .subscribe((data) => {
                        console.log(data);
                        this.userInfoService.passVal.next(obj);
                      })
  }

}
 
    
  
  


