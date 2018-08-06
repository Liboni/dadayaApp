import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  activities="notices";
  activeTab="1";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.activities="notices";
  }
  tab(name){
    this.activeTab=name;
  }
}
