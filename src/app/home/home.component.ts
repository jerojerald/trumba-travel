import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav:MatSidenav  | undefined;
  constructor(private _commonSer: CommonService) { }

  ngOnInit(): void {
    this.MenuOpenRes(); 
  }

  MenuOpenRes() {
    this._commonSer.getHeaderOpen().subscribe((res) => {
        this.toggleSidenav();
    });
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

}
