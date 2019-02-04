import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrlType } from '../../enums/base-type-url';

@Injectable()
export class ProvidersConfigProvider {

  constructor() { }

  public baseUrl(key:BaseUrlType) {    
    switch (key) {
      case BaseUrlType.Main:
        return "http://localhost:52337/";     
        case BaseUrlType.File:
        return "http://192.168.10.231:1020/";     
      default:
        return "";
    }
  }

  public GetOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(localStorage.getItem("token"))
      })
    };
  }

}
