import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GalleryImagesComponent } from '../../components/gallery-images/gallery-images';

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
  openModal(value){
    let profileModal = this.modal.create(GalleryImagesComponent, { imageType: value });
    profileModal.present();
  }
}
