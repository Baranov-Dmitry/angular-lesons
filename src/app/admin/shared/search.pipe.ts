import { PipeTransform, Pipe } from '@angular/core';
import { Post } from 'src/app/shared/interface';

@Pipe({
  name: 'searchPosts'
})
export class SearchPipe implements PipeTransform {
  transform(posts: Post[], searchStr = ''): Post[] {
    if (!searchStr.trim()) {
      return posts
    }

    return posts.filter(post => {
      return post.title.toLowerCase().includes(searchStr.toLowerCase())
    })
  }

}