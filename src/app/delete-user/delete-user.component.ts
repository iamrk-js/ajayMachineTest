import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../shared/services/user.service';
import { PeriodicElement } from '../table/table.component';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  patchData! : PeriodicElement;
  public deleteId!:number;
  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    
    ) {
      this.patchData=data.pageValue;
     
    }
  
  ngOnInit(): void {
     this.deleteId = this.patchData?.key;
     console.log(this.deleteId)
  }

  onDeleteData(){
    debugger
    console.log("Deleting Info")
    this.userService.deleteDataApi(this.deleteId).subscribe((res) => {
      console.log(res)
    })
  }
  
}
