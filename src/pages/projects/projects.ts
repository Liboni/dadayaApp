import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvidersRequestHandlerProvider } from '../../providers/providers-request-handler/providers-request-handler';
import { UrlPreffix } from '../../enums/url-preffix';
@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  items:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public request:ProvidersRequestHandlerProvider) {
  }

  ionViewDidLoad() {
  this.request.getAll(UrlPreffix.Projects).then(result=>{
     this.items=result;     
     this.items.sort((a, b) => {
      if(a.dateCreated < b.dateCreated) {
        return 1;
      } else if(a.dateCreated > b.dateCreated) {
        return -1;
      } else {
        return 0;
      }
    });  
  }).catch((err)=>console.log(err))
  }

}
