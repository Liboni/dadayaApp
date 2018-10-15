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
  public static profileModal:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
  }
  tab(name){
    this.activeTab = name;
  }
  openModal(value){
    GalleryPage.profileModal = this.modal.create(GalleryImagesComponent, { imageType: value });
    GalleryPage.profileModal.present();
  }
}
