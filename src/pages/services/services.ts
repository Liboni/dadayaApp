import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
  activeTab:String = "ACADEMICS";
  activeAcademicTab:String = "SCIENCES";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tab(name){
    this.activeTab = name;
  }
  academicTab(name){
    this.activeAcademicTab = name;
  }
}
