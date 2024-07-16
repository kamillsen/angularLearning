import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
 /*=>AppComponent app.compoent.ts deki class adi
   =>ts uzantisini gecmeye gerek yok zaten biliyor
 */
import { AppNavbar } from './app/navbar/navbar.component';

/* index.html sayfamızın oluşturduğumuz componentten haberdar olup onu görmesini sağlar */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
