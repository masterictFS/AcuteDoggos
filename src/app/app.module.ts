import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { DoghouseListComponent } from './doghouse-list/doghouse-list.component';
import { DogListComponent } from './dog-list/dog-list.component';
import {FormsModule} from '@angular/forms';
import { ReplaceCharPipe } from './common/replace-char.pipe';
import { CustomSplitPipe } from './common/custom-split.pipe';
import { PawRatingComponent } from './common/paw-rating.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DoghouseListComponent,
    DogListComponent,
    ReplaceCharPipe,
    CustomSplitPipe,
    PawRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
