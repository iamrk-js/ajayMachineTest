import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PeriodicElement } from 'src/app/table/table.component';

@Injectable({
  providedIn: 'root'
})
export class UserSubjectsService {
  passVal = new Subject<PeriodicElement>();
  constructor() { }

  


}
