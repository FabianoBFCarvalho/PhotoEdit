import { ErrorHandler, NgModule }       from "@angular/core";
import { IonicErrorHandler, IonicModule }            from "ionic-angular";
import { ImageCropperModule }           from "ng2-img-cropper";
import { Photo }                        from "./photo";



@NgModule({
    declarations: [
        Photo
    ],
    imports: [
        ImageCropperModule,
        IonicModule.forRoot(Photo)
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
  })
  export class PhotoModule { }
  