import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ApiService]
})
export class HomePage {
  notices:any;
  notes: any;
  constructor(public navCtrl: NavController, public _api: ApiService) {
    this.load();
  }

  load(){
    /* this._api.getNotice()
    .then((res)=>{
      this.notices = JSON.parse(JSON.stringify(res));
      return console.log(this.notices);
    }); */
    this._api.getNotice()
    .subscribe(res=>{
      this.notices = res;
      this.notes = this.notices.articles;
      console.log(this.notes);
    });
  }
}
