import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import {flickrService} from "./flickr.service";
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2FilterPipeModule,
    Ng2OrderModule
  ],
  providers: [flickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
