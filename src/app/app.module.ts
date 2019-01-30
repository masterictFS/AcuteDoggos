import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { DoghouseListComponent } from './doghouse-list/doghouse-list.component';
import { DogListComponent } from './dog-list/dog-list.component';
import {FormsModule} from '@angular/forms';
import { ReplaceCharPipe } from './common/replace-char.pipe';
import { CustomSplitPipe } from './common/custom-split.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DoghouseListComponent,
    DogListComponent,
    ReplaceCharPipe,
    CustomSplitPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
