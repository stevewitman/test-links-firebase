import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class LinksService {
  links;
  
  constructor(db: AngularFireDatabase) {
    this.links = db.list('/links');
  }

  addLink(name, url) {
    this.links.push({name: name.value, url: url.value})
    name.value = url.value = '';
  }

}
