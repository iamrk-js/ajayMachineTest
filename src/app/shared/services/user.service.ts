import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodicElement } from 'src/app/table/table.component';
import  userData  from '../Database/user.json';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "https://machinetest-f8955-default-rtdb.firebaseio.com";
  constructor(public http : HttpClient) { }
  fetchData(){
    return this.http.get(this.baseUrl+"/.json")
  }

  patchData(id:number,editBody:PeriodicElement){
    return this.http.put(`${this.baseUrl}/${id}/.json`,editBody)
  }
}
