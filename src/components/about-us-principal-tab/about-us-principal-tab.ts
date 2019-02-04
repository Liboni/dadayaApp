import { Component } from '@angular/core';
import { ProvidersRequestHandlerProvider } from '../../providers/providers-request-handler/providers-request-handler';
import { UrlPreffix } from '../../enums/url-preffix';

@Component({
  selector: 'about-us-principal-tab',
  templateUrl: 'about-us-principal-tab.html'
})
export class AboutUsPrincipalTabComponent {
  items:any[]=[];
  constructor(public request:ProvidersRequestHandlerProvider) {
    this.request.getAll(UrlPreffix.PrincipalMessage).then(result => {
      this.items = result;
      console.log( this.items);
      
    }).catch((err) => console.log(err))
  }

  ionViewDidLoad() {
     
  }
}
