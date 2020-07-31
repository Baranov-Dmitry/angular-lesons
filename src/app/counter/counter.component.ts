import { Component } from '@angular/core';
import { AppLocalCounterServices } from '../services/app-local-counter.services';
import { AppCounterServices } from '../services/app-counter.services';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [AppLocalCounterServices]
})
export class CounterComponent  {

  constructor(public appCounterService: AppCounterServices, 
    public appLocalCounterService: AppLocalCounterServices ) {
  }
 

}
