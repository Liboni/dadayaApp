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
    this.imageType = params.get('imageType');   
  }
 
  next(max) {    
    if(this.step==max){
      this.step=1;
      return;
    }
    this.step++;
  }
  prev(max) {
    if(this.step==1){
      this.step=max;
      return;
    }
    this.step--;   
  }
  set(value){    
    this.step=value;
  }
}
