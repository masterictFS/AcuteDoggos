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
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './common/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DoghouseListComponent,
    DogListComponent,
    ReplaceCharPipe,
    CustomSplitPipe,
    PawRatingComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'doghouses', component: DoghouseListComponent},
      {path: 'dogs', component: DogListComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
