import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links;
  
  constructor(db: AngularFireDatabase) {
    this.links = db.list('/links');
  }

  send(name, url) {
    this.links.push({name: name.value, url: url.value})
    name.value = url.value = '';
  }

  ngOnInit() {
  }

}
