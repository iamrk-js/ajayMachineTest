import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from './shared/services/user.service';
import { PeriodicElement } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
  dataSource!:PeriodicElement[];
  constructor( public userService: UserService ){

  }
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.userService.fetchData()
                    .subscribe((data: any) =>{
                      console.log(data);
                      this.dataSource = data;
                    })
  }
}
