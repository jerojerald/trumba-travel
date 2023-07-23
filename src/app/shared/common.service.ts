import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  headerOpen = new BehaviorSubject<any>(false)

  constructor() { }

  setheaderOpen(data:Boolean) {
    this.headerOpen.next(data);
  }

  getHeaderOpen(): Observable<boolean> {
    return this.headerOpen.asObservable();
  }

}
