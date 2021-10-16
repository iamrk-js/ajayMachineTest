import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { SelectionModel } from '@angular/cdk/collections';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { UserService } from '../shared/services/user.service';
import { UserSubjectsService } from '../shared/subject/user-subjects.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit {
  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['select', 'name', 'email', 'gender', 'address', 'dob'];
  @Input() dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  color: string = "#00a99d"



  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public dialog: MatDialog,
    public userInfoService: UserSubjectsService,
    public userService: UserService) {

  }
  ngOnInit(): void {
    this.getData()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(ele: any) {
    let dialogRef = this.dialog.open(DeleteUserComponent, { restoreFocus: true });
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

  openDialog2(ele: PeriodicElement) {
    console.log(ele);
    let dialogRef = this.dialog.open(EditUserComponent, {
      restoreFocus: true,
      width: '60%',
      data: { pageValue: ele }

    });
    dialogRef.afterClosed()
      .subscribe((res) => {
        this.menuTrigger.focus();
        console.log(res)
      });

  }

  getData() {
    this.userService.fetchData()
      .subscribe((data: any) => {
        console.log(data);
        this.dataSource = data;
      })
  }
  /** Whether the number of selected elements matches the total number of rows. */

  isAllSelected() {
    const numSelected = this.selection?.selected.length;
    const numRows = this.dataSource?.data?.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  /*  */
}


export interface PeriodicElement {
  position: number;
  name: string;
  email: string;
  gender: string;
  address: string;
  dob: string;
  key: number;

}