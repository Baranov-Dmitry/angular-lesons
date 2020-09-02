import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Post, FbCreateResponce } from './interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(
    private http: HttpClient) {

  }

  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.fbDBUrl}/posts.json`, post)
    .pipe(map((response: FbCreateResponce) => {
        return {
          ...post,
          id: response.name,
          date: new Date(post.date)
        }
      })
    )
  }

  getAll(): Observable<any> {
    return this.http.get(`${environment.fbDBUrl}/posts.json`)
      .pipe(
        (response) => {
          //в функцию пайп можно передать несколко лямбда функий через запятую либо для
          // можно вызвать функцию tap
          return response
        },
        map((response) => {
          return Object.keys(response).map(key => ({
              autor: response[key].autor,
              title: response[key].title,
              text: response[key].text,
              id: key,
              date: new Date(response[key].date)
            })
          )
        })
      )
  }

  getById(id: string): Observable<Post> {
    return this.http.get(`${environment.fbDBUrl}/posts/${id}.json`)
      .pipe(map((post: Post) => {
        return {
          ...post,
          id,
          date: new Date(post.date)
        }
      })
    )
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${environment.fbDBUrl}/posts/${id}.json`)
  }

  update(post: Post): Observable<Post> {
    console.log(post)
    return this.http.patch<Post>(`${environment.fbDBUrl}/posts/${post.id}.json`, post)
  }

}