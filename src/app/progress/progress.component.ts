import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { PeriodicElement } from '../table/table.component';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  color: string = "white";
  public userData!: any[];
  @Input() dataSourceIN!: PeriodicElement[];
  constructor(public userService: UserService) {
   
  }
  ngOnInit(): void {
    console.log("Progress Comp",this.dataSourceIN)
  }
}
