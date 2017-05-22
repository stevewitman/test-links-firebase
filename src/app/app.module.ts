import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBoE63_A8EuiFhCx0Q_3WkNIe4iVqrun-w",
      authDomain: "ablinks-4e960.firebaseapp.com",
      databaseURL: "https://ablinks-4e960.firebaseio.com",
      projectId: "ablinks-4e960",
      storageBucket: "ablinks-4e960.appspot.com",
      messagingSenderId: "154062695240"
    }),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
