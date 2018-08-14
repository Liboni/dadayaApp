import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ServicesPage } from '../services/services';
import { GalleryPage } from '../gallery/gallery';

@IonicPage()
@Component({
  selector: 'page-portal',
  templateUrl: 'portal.html',
})
export class PortalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
