import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import { AppCounterServices } from './services/app-counter.services';
import { CounterComponent } from './counter/counter.component'

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AppCounterServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
