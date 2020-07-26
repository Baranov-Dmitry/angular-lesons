import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-basic';
  date : Date = new Date()
  
  posts: Post[] = [
    {title:'Angulat components', text:'discription of components', id: 1},
    {title:'Angulat title', text:'discription of title', id: 2}
  ]

  ngOnInit(): void {
    setTimeout(() => {
      console.log('setTimeout')
      this.posts = [
        {title: 'changed!', text: 'Changed', id: 33}
      ]
    }, 5000)
  }

  updatePost(post: Post) {
    this.posts.unshift(post)
  }

  removePost(id) {
    console.log('remove post', id)
    this.posts = this.posts.filter(p => p.id !== id)
    console.log(this.posts)
  }
}

// arr = [0,1,1,2,3,5,8,13];
  
// objs = [
//   {title: 'Post 1', autor: 'Vlad', comments: [
//       {name: 'Max', text: 'Lorem 1'},
//       {name: 'Max', text: 'Lorem 2'},
//       {name: 'Max', text: 'Lorem 3'},
//     ]},
//   {title: 'Post 2', autor: 'Vlad 2', comments: [
//       {name: 'Max 2', text: 'Lorem 1'},
//       {name: 'Max 2', text: 'Lorem 2'},
//       {name: 'Max 2', text: 'Lorem 3'},
//     ]},
// ]

//toggle:any = false
// number = 42;
//   arr = [1, 2, 3];
//   obj = {a: 1, b: {b: 5, c: 10} };
//   inputValue = ''
//   // img = 'https://s3.amazonaws.com/geekbrains-uploads/geekbrains/public/ckeditor_assets/pictures/3955/content_reactreduxintroduction-151124165017-lva1-app6891-thumbnail-4_jpg-cb_1448383914.jpg';


//   constructor() {
//     // setTimeout (() => {
//     //   console.log('timer is ouwer');
//     //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
//     // }, 2000);

//   }

//   onInput(event: KeyboardEvent) {
//     this.inputValue = (<HTMLInputElement>event.target).value
//   }

//   onClick() {
//     this.inputValue = (<HTMLInputElement>event.target).value
//   }

//   onBlur(str: string) {
//     this.inputValue = str
//   }