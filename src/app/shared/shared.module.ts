import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { QuillModule } from 'ngx-quill'


@NgModule({
  imports: [
    HttpClientModule,
    // модуль для готового редактора текста на сайт
    QuillModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    QuillModule
  ]
})
export class SharedModule {
  
}