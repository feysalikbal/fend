import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
//import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';

import { AuthService } from './auth/auth.service';
import { ProfileComponent } from './user/profile/profile.component';

export const firebaseConfig = {
    apiKey: "AIzaSyBXPwC0siyMWk8a06X63kp5EUXZwbrUv0M",
    authDomain: "share-18568.firebaseapp.com",
    databaseURL: "https://share-18568.firebaseio.com",
    projectId: "share-18568",
    storageBucket: "share-18568.appspot.com",
    messagingSenderId: "926919562029"
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SigninComponent,
    ItemListComponent,
    ItemEditComponent,
    ItemDetailComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
