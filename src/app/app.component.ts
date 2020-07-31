import {Component, OnInit} from '@angular/core'
import { AppCounterServices } from './services/app-counter.services';
import { AppLocalCounterServices } from './services/app-local-counter.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppLocalCounterServices]
})
export class AppComponent  {

  constructor(public appCounterService: AppCounterServices, 
    public appLocalCounterService: AppLocalCounterServices ) {

  }

}
