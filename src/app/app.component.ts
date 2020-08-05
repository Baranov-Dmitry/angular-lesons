import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core'
import { ModalComponent } from './modal/modal.component'
import { RefDirective } from './modal/ref.derective'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild(RefDirective) refDir: RefDirective

  constructor(private resolver: ComponentFactoryResolver,
    private title: Title,
    private meta: Meta) {
      const t = title.getTitle()
      title.setTitle('App component page')
      console.log(t)
      this.meta.addTags([
        {name: 'keywords', content: 'Angular,google,appcomponent'},
        {name: 'description', content: 'this is app'}
      ])
  }
  
  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent)
    const component = this.refDir.containerRef.createComponent(modalFactory)
    component.instance.title = 'Dynamic Title'
    component.instance.close.subscribe(()=>{
      this.refDir.containerRef.clear()
    })
  }

}

