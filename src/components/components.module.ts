import { NgModule } from '@angular/core';
import { AboutUsPrincipalTabComponent } from './about-us-principal-tab/about-us-principal-tab';
import { IonicModule } from 'ionic-angular';
import { AboutUsStrategicTabComponent } from './about-us-strategic-tab/about-us-strategic-tab';
import { AboutUsStaffTabComponent } from './about-us-staff-tab/about-us-staff-tab';
import { AboutUsBackgroundTabComponent } from './about-us-background-tab/about-us-background-tab';
import { FooterComponent } from './footer/footer';
import { GalleryImagesComponent } from './gallery-images/gallery-images';

@NgModule({
	declarations: [AboutUsPrincipalTabComponent,
    AboutUsStrategicTabComponent,
    AboutUsStaffTabComponent,
    AboutUsBackgroundTabComponent,
    FooterComponent,
    GalleryImagesComponent],

    imports: [IonicModule],
    
	exports: [AboutUsPrincipalTabComponent,
    AboutUsStrategicTabComponent,
    AboutUsStaffTabComponent,
    AboutUsBackgroundTabComponent,
    FooterComponent,
    GalleryImagesComponent]
})
export class ComponentsModule {}
