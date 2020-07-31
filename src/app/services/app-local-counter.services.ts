import { Injectable } from '@angular/core'

@Injectable()
export class AppLocalCounterServices {
  counter = 0

  increase() {
    this.counter++
  }

  decrease() {
    this.counter--
  }

  getCounter() {
    return this.counter
  }

}