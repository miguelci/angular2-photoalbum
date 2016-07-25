import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Image } from './image';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

  constructor(private http: Http) { }

  getImages() {
    return this.http.get('app/images.json')
          .map(response => <Image[]>response.json().imagesData);
  }
}
