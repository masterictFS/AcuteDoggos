import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  appTitle: string;
  appSubtitle: string;
  appDescription: string;
  author: string;
  buttonText: string;
  buttonURL: string;

  constructor() {
    this.appTitle = 'Lotsa dogs';
    this.appSubtitle = 'For all your dog needs';
    this.appDescription = 'A cute example';
    this.author = 'some Good Ol Dog';
    this.buttonText = 'Click me if you feel like it :)';
    this.buttonURL = 'https://omfgdogs.com/';
  }
}
