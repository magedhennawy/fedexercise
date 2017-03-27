import {Component, OnInit} from '@angular/core';
import {flickrService} from "./flickr.service";


@Component({
  selector: 'app-root',
  host: {'(window:keydown)': 'hotkeys($event)'},
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedImage;
  photos = [];
  pageNumber = 1;
  photoOrder = 'title';
  query : any = {title:''};


  constructor(private flickrService: flickrService) { }

  ngOnInit() {
    this.flickrService.callFlickrFunctions('flickr.people.getPublicPhotos', this.pageNumber).subscribe(data =>{
      this.photos = data.photos.photo;
      this.pageNumber =1;
    });
  }

  nextPage(forward){
    this.pageNumber = this.pageNumber +(forward ? 1: -1);
    this.flickrService.callFlickrFunctions('flickr.people.getPublicPhotos', this.pageNumber).subscribe(data =>{
      this.photos = data.photos.photo;
    });
    console.log(this.pageNumber);
  }

  navigate(forward){
    var index = this.photos.indexOf(this.selectedImage)+(forward ? 1: -1);
    if(index >= 0 && index < this.photos.length){
      this.selectedImage = this.photos[index];
    }
  }

  setSelectedImage(image){
    this.selectedImage= image;
  }



  hotkeys(event){
    if(this.selectedImage){
      if (event.keyCode == 37){
        this.navigate(false);
      }else if(event.keyCode == 39){
        this.navigate(true);
      }
    }
  }

  clearfix(photoIndex) {
    if ((photoIndex % 3) === 2) {
      return 'visible-lg-block visible-md-block clearfix';
    } else if ((photoIndex % 2) === 1) {
      return 'visible-sm-block clearfix';
    }

    return '';
  };
}
