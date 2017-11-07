import { BrowserModule }                  from '@angular/platform-browser';
import { ErrorHandler, NgModule }         from '@angular/core';
import { IonicApp, IonicErrorHandler,
         IonicModule }                    from 'ionic-angular';
import { SplashScreen }                   from '@ionic-native/splash-screen';
import { StatusBar }                      from '@ionic-native/status-bar';
import { Crop }                           from '@ionic-native/crop';
import { MyApp }                          from './app.component';
import { HomePage }                       from '../pages/home/home';

 import { ImageCropperModule }            from 'ngx-image-cropper';
import { PhotoModule }                    from '../pages/img-cropper/photo.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,

  ],
  imports: [
    BrowserModule,
    ImageCropperModule,
    PhotoModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Crop,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
