import { Component, OnInit } from '@angular/core';
import { SecureService } from '../secure.service';

@Component({
  selector: 'app-hastag-list',
  templateUrl: './hastag-list.component.html',
  styleUrls: ['./hastag-list.component.scss']
})
export class HastagListComponent implements OnInit {

  constructor(private _secureService: SecureService) { }

  public locationList: any = [];
  ngOnInit() {
    this._secureService.getWOEID().subscribe(data => {
      this.locationList = data;
      console.log(this.locationList);
    });
    this.getTime();
  }

  getTime() {
    let now = new Date();
    console.log(now.getTime());
  }

  getHastagById(id) {
    this._secureService.getTrendingHasTags(id).subscribe(res => {
      console.log(res);
    });
  }


}
