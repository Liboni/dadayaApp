import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutUsPage } from '../pages/about-us/about-us';
import { ContactPage } from '../pages/contact/contact';
import { GalleryPage } from '../pages/gallery/gallery';
import { ProjectsPage } from '../pages/projects/projects';
import { ServicesPage } from '../pages/services/services';
import { NewsPage } from '../pages/news/news';
import { LoginPage } from '../pages/login/login';
import { TestgalleryPage } from '../pages/testgallery/testgallery';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  activePage:any='Home';
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
   
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'About Us', component: AboutUsPage },
      { title: 'Services', component: ServicesPage },
      { title: 'Gallery', component: GalleryPage },
      { title: 'Projects', component: ProjectsPage },
      { title: 'News', component: NewsPage },
      { title: 'Contact', component: ContactPage },
      { title: 'Test', component: TestgalleryPage },
      { title: 'Login', component: LoginPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  homePage() {
    this.nav.setRoot(HomePage);
    this.activePage = 'Home';
  }
  openPage(page) {
    this.activePage = page.title;
    this.nav.setRoot(page.component);
  }
}
