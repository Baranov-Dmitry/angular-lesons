import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, FbCreateResponce } from './interface';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(
    private http: HttpClient) {

  }

  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.fbDBUrl}/posts.json`, post)
    .pipe(map((response: FbCreateResponce)=>{
        return {
          ...post,
          id: response.name,
          date: new Date(post.date)
        }
      })
    )
  }

}