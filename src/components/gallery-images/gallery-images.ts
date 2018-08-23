import { Component } from '@angular/core';
@Component({
  selector: 'gallery-images',
  templateUrl: 'gallery-images.html'
})
export class
  GalleryImagesComponent {
  step = 1;
  constructor() { }
 
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
