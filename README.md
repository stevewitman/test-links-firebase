## Firebase

Sign up for a [Firebase](https://firebase.google.com/) account

Install [angularfire2](https://github.com/angular/angularfire2) (Before you start installing AngularFire2, make sure you have latest version of angular-cli installed. See [installation instructions](https://github.com/angular/angularfire2/blob/master/docs/1-install-and-setup.md).

Install AngularFire 2 and Firebase

```
npm install angularfire2 firebase --save
```

```
npm install promise-polyfill --save
```

Import AngularFireModule & AngularFireDatabaseModule in `app.module.ts`

```
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
```

Import those modules in `app.module.ts`

```
AngularFireModule.initializeApp(),
AngularFireDatabaseModule,
```

Copy the configuration object from Firebase and use as argument for initializeApp() method

```
AngularFireModule.initializeApp({
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "..."
}),
```

Generate a component called links

```
ng g c links
```

Import AngularFireDatabase in `links.component.ts`

```
import { AngularFireDatabase } from 'angularfire2/database';
```

In the LinksComponent, declare a variable called links (which will be a Firebase list object)

```
links;
```

In the constructor inject the AngularFireDatabase object and set links to a Firebase list object from the links endpoint on the Firebase server. This will be listening to the list of links.

```
constructor(db: AngularFireDatabase) {
    this.links = db.list('/links');
}
```

Define a method called addLink() to push new links to the database and reset our local state.

```
addLink(name, url) {
    this.links.push({name: name.value, url: url.value})
    name.value = url.value = '';
}
```

Create the template

```
<div *ngFor="let link of links | async" class="links-div">
  <a href="{{link.url}}">{{ link.name }}</a>
</div>

<div>
  <input placeholder="name" #name>
  <input placeholder="url" #url>
  <button class="btn btn-primary" (click)="addLink(name, url)">Send</button>
</div>
```

Note: the *async* pipe is actually creating a subscription only to that observable and only within the context of this component. So when this component is not instantiated, when it is not on the screen, for example if we on another route, it is automatically going dispose of and end that subscription so that we are not wasting resources in order to keep that alive.

### Extract to a service

Generate a service called links

```
ng g s links
```

Import AngularFireDatabase into our service

```
import { AngularFireDatabase } from 'angularfire2/database';
```

Copy code from LinksComponent class and paste in links service

```
links;

constructor(db: AngularFireDatabase) {
this.links = db.list('/links');
}

addLink(name, url) {
this.links.push({name: name.value, url: url.value})
name.value = url.value = '';
}
```

Inject the links service into the constructor of the LinksComponent class in `links.component.ts`

```
constructor(private _linksService: LinksService) { }
```

Use the onInit() to set links equal to the links list from the links service. The onInit() method is created when Angular creates this component.

```
ngOnInit() {
    this.links = this._linksService.links;
}
```

Finally, in `app.module.ts` import the service and add it to the providers array.

```
import { LinksService } from './shared/links.service'
...
providers: [LinksService],
```














Use <div *ngIf="link"> to check for link before it tries to load it.