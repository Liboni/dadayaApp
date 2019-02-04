import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvidersRequestHandlerProvider } from '../../providers/providers-request-handler/providers-request-handler';
import { UrlPreffix } from '../../enums/url-preffix';


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  notices: any[] = [];
  events: any[] = [];
  activities = "notices";
  activeTab = 1;
  noticeSelected: boolean = true;
  eventSelected: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public request: ProvidersRequestHandlerProvider) {
    this.activities = "notices";
    if (navParams.get('data')) {
      this.activities = navParams.get('data');
      if (this.activities === 'notices') {
        this.noticeSelected = true;
        this.eventSelected = false;
      }
      else {
        this.noticeSelected = false;
        this.eventSelected = true;
      }
      this.activeTab = navParams.get('tab');
    }
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

  tabEvent(name) {
    this.activeTab = name;
    this.noticeSelected = false;
    this.eventSelected = true;
  }

  tabNotice(name) {
    this.activeTab = name;
    this.noticeSelected = true;
    this.eventSelected = false;
  }
}
