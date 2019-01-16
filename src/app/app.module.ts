import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { DoghouseListComponent } from './doghouse-list/doghouse-list.component';
import { DogListComponent } from './dog-list/dog-list.component';
import {FormsModule, NgModel} from '@angular/forms';
import { ReplaceCharPipe } from './common/replace-char.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DoghouseListComponent,
    DogListComponent,
    ReplaceCharPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
