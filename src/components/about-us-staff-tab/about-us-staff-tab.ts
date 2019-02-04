import { Component } from '@angular/core';
import { ProvidersRequestHandlerProvider } from '../../providers/providers-request-handler/providers-request-handler';
import { UrlPreffix } from '../../enums/url-preffix';

@Component({
  selector: 'about-us-staff-tab',
  templateUrl: 'about-us-staff-tab.html'
})
export class AboutUsStaffTabComponent {
  items: any[] = [];
  options: any[] = [];
  constructor(public request: ProvidersRequestHandlerProvider) {
    this.request.getAll(UrlPreffix.Staffs).then(result => {
      this.request.getAll(UrlPreffix.JobTitles).then(option => {
        this.items = result;
        this.items.sort((a, b) => {
          return a.jobTitleId - b.jobTitleId;
        });
        this.options = option;
      }).catch((err) => console.log(err))
    }).catch((err) => console.log(err))
  }
}
