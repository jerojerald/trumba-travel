import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _commonSer: CommonService) { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this._commonSer.setheaderOpen(true);
  }

}
