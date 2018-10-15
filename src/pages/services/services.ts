import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
  activeTab:String = "ACADEMICS";
  activeAcademicTab:String = "SCIENCES";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     if( navParams.get('data')!=null){
      this.activeTab = navParams.get('data');
    }   
  }

  tab(name){
    this.activeTab = name;
  }
  academicTab(name){
    this.activeAcademicTab = name;
  }
}
