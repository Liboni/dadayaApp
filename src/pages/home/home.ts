import { Component ,ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ServicesPage } from '../services/services';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {
    
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex==3){
      this.slides.stopAutoplay();
    }
  }
  servicePage(name){
      this.navCtrl.push(ServicesPage,{data:name});
  }

  event(value){
    this.navCtrl.push(NewsPage,{data:'events',tab:String(value)});
  }
  notice(value){
    this.navCtrl.push(NewsPage,{data:'notices',tab:String(value)});
  }
}
