import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutUsPageModule } from '../pages/about-us/about-us.module';
import { AboutUsPage } from '../pages/about-us/about-us';
import { ContactPageModule } from '../pages/contact/contact.module';
import { ContactPage } from '../pages/contact/contact';
import { GalleryPage } from '../pages/gallery/gallery';
import { GalleryPageModule } from '../pages/gallery/gallery.module';
import { ProjectsPage } from '../pages/projects/projects';
import { ProjectsPageModule } from '../pages/projects/projects.module';
import { ServicesPage } from '../pages/services/services';
import { ServicesPageModule } from '../pages/services/services.module';
import { NewsPageModule } from '../pages/news/news.module';
import { NewsPage } from '../pages/news/news';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    AboutUsPageModule,
    ContactPageModule,
    GalleryPageModule,
    NewsPageModule,
    ProjectsPageModule,
    ServicesPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutUsPage,
    ContactPage,
    GalleryPage,
    ProjectsPage,
    NewsPage,
    ServicesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
