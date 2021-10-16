import { Component, OnInit } from '@angular/core';
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

  constructor(public userService: UserService) {
        console.log("Testing Conflicts")
  }
  ngOnInit(): void {
  }


}
