import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  activeTab:String = "PREMISES";
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
  }
  tab(name){
    this.activeTab = name;
  }
  openModal(){
    let profileModal = this.modal.create(Profile, { userId: 8675309 });
    profileModal.present();
  }
}

class Profile {

 constructor(params: NavParams) {
   console.log('UserId', params.get('userId'));
 } 

}
