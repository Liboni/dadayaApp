import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
@Component({
  selector: 'gallery-images',
  templateUrl: 'gallery-images.html'
})
export class
  GalleryImagesComponent {
  step = 1;
  imageType:any;
  constructor(params: NavParams) {    
    this.imageType= params.get('imageType');
    console.log(params.get('imageType'));
  }
 
  next() {    
    if(this.step==7){
      this.step=1;
      return;
    }
    this.step++;
  }
  prev() {
    if(this.step==1){
      this.step=7;
      return;
    }
    this.step--;   
  }
  set(value){    
    this.step=value;
  }
}
