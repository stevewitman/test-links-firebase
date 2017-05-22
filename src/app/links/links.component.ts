import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { LinksService } from '../shared/links.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links;
  
  constructor(private _linksService: LinksService) { }

  // send(name, url) {
  //   this.links.push({name: name.value, url: url.value})
  //   name.value = url.value = '';
  // }

  ngOnInit() {
    this.links = this._linksService.links;
  }

  

  addLink(name, url) {
    this._linksService.addLink(name, url);
  }

}
