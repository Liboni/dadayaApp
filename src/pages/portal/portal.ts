import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-portal',
  templateUrl: 'portal.html',
})
export class PortalPage {
  activeTab: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  tab(name) {
    this.activeTab = name;
  }
}
