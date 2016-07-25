import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Tag } from './tag';
import 'rxjs/add/operator/map';

@Injectable()
export class TagService {

  constructor(private http: Http) { }

  getTags() {
    return this.http.get('app/tags.json')
          .map(response => <Tag[]>response.json().tagsData);
  }
}
