import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProvidersConfigProvider } from '../providers-config/providers-config';

@Injectable()
export class ProvidersRequestHandlerProvider {

  constructor(public http: HttpClient, public config: ProvidersConfigProvider) {
  }

  get(id, preffix) {
    return new Promise((resolve, reject) => {
      this.http.get(this.config.baseUrl(preffix.key) + preffix.variable+"/" + id)
        .subscribe((response) => {
          resolve(response);
        }, (error) => {
          reject(error);
        })
    });
  }

  getAll(preffix) :any{
    return new Promise((resolve, reject) => {
      this.http.get(this.config.baseUrl(preffix.key)+preffix.variable)
        .subscribe((response) => {
          resolve(response);
        }, (error) => {
          reject(error);
        })
    });
  }
}
