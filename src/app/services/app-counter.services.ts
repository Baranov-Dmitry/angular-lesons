import { Injectable } from '@angular/core'
import { LogService } from './log.service'

@Injectable({
  providedIn: 'root'
})
export class AppCounterServices {
  counter = 0

  constructor(private logServices: LogService) {

  }

  increase() {
    this.logServices.log('increase')
    this.counter++
  }

  decrease() {
    this.logServices.log('decrease')
    this.counter--
  }

  getCounter() {
    this.logServices.log('getCounter')
    return this.counter
  }

}