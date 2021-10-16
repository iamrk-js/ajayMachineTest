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
  public maleCount:number =0
  public femaleCount:number =0
  constructor(public userService: UserService) {
        console.log("Testing Conflicts")
  }
  ngOnInit(): void {
    console.log("Progress Comp",this.dataSourceIN);
    this.getGenderCount()
  }

    getGenderCount(){
      if( this.dataSourceIN){
        this.dataSourceIN.forEach((obj:PeriodicElement) => {
          if(obj.gender.toLowerCase() === "female"){
            this.femaleCount += 1;
          }else{
            this.maleCount += 1;
          }
        })
      }
    }
}
