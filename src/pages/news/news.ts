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
    console.log(navParams.get('data'), navParams.get('tab'));
   if(navParams.get('data')){
    console.log(navParams.get('data'), navParams.get('tab'));
     this.activities=navParams.get('data');
     this.activeTab = navParams.get('tab');
   }
  }
  tab(name){
    this.activeTab=name;
  }
}
