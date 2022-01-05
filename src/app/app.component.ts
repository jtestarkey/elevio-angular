import { Component } from '@angular/core';
import Elevio from 'elevio/esm/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'elevio-angular';

  constructor() {
    Elevio.load('abcdef');
  }
}
