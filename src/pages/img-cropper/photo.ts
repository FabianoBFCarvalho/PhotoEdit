import {Component, ViewChild, Type}         from '@angular/core';
import {ImageCropperComponent,
        CropperSettings, Bounds}            from 'ng2-img-cropper';
import { NavController }                    from 'ionic-angular';
import { HomePage }                         from '../home/home';

@Component({
    selector: 'photo-edit',
    templateUrl: 'photo.html'
})
export class Photo  {
    data1:any;
    cropperSettings1:CropperSettings;
    croppedWidth:number;
    croppedHeight:number;
    
    @ViewChild('cropper', undefined) cropper:ImageCropperComponent;
    
    constructor(private navCtrl: NavController) {

    }

    ngOnInit() {
        this.cropperSettings1 = new CropperSettings();
        this.cropperSettings1.width = 200;
        this.cropperSettings1.height = 200;

        this.cropperSettings1.croppedWidth = 200;
        this.cropperSettings1.croppedHeight = 200;

        this.cropperSettings1.canvasWidth = 500;
        this.cropperSettings1.canvasHeight = 300;

        this.cropperSettings1.minWidth = 50;
        this.cropperSettings1.minHeight = 50;

        this.cropperSettings1.rounded = true;
        this.cropperSettings1.keepAspect = true;

        this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings1.cropperDrawSettings.strokeWidth = 3;

        this.data1 = {};
    }
  
    cropped(bounds:Bounds) {
        this.croppedHeight =bounds.bottom-bounds.top;
        this.croppedWidth = bounds.right-bounds.left;
    }
  
    fileChangeListener($event) {
        var image:any = new Image();
        var file:File = $event.target.files[0];
        var myReader:FileReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent:any) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    }

    outraPage() {
		this.navCtrl.push(HomePage);
	}
}
