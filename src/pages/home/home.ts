import {Component}        	from '@angular/core'
import {BrowserModule}    	from '@angular/platform-browser'
import { Photo } 		 	from '../img-cropper/photo';
import { NavController } 	from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(private navCtrl: NavController) { }
	
	imageChangedEvent: any = '';
	croppedImage: any = '';

	fileChangeEvent(event: any): void {
		this.imageChangedEvent = event;
	}

	imageCropped(image: string) {
		this.croppedImage = image;
	}

	outraPage() {
		this.navCtrl.push(Photo);
	}

}