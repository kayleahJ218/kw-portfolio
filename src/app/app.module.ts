import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HomepageComponent } from './homepage.component';
import { SocialmediaComponent } from './socialmedia.component';
import { ResumeComponent } from './resume.component';

import { AppRoutingModule } from './app.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HomepageComponent, SocialmediaComponent, ResumeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
