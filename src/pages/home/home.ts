import { Component ,ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ServicesPage } from '../services/services';
import { NewsPage } from '../news/news';
import { ProvidersRequestHandlerProvider } from '../../providers/providers-request-handler/providers-request-handler';
import { UrlPreffix } from '../../enums/url-preffix';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notices: any[] = [];
  events: any[] = [];
  @ViewChild(Slides) slides: Slides;
  constructor(public request:ProvidersRequestHandlerProvider, public navCtrl: NavController) {    
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

  ionViewDidLoad() {
    this.request.getAll(UrlPreffix.Notices).then(result => {
      this.notices = result;
      this.notices.sort((a, b) => {
        if(a.dateCreated < b.dateCreated) {
          return 1;
        } else if(a.dateCreated > b.dateCreated) {
          return -1;
        } else {
          return 0;
        }
      });
    }).catch((err) => console.log(err))
    this.request.getAll(UrlPreffix.Events).then(result => {
      this.events = result;  
      this.events.sort((a, b) => {
        if(a.dateCreated < b.dateCreated) {
          return 1;
        } else if(a.dateCreated > b.dateCreated) {
          return -1;
        } else {
          return 0;
        }
      });   
    }).catch((err) => console.log(err))
  }
}
