import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { delay, catchError, map, tap } from 'rxjs/operators';

export interface Todo {
  completed: boolean,
  title: string,
  id?: number
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable<Todo> {
    const headers = new HttpHeaders({
      'MyCustomHeader': Math.random().toString()
    })
     return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
       headers: headers
     })
  }

  fetchTodo(): Observable<Todo[]> {
    let params = new HttpParams()
    params = params.append('_limit', '4')
    params = params.append('custom', 'anypring')
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      //params: new HttpParams().set('_limit', '3')
      params: params,
      observe: 'response'
    })
      .pipe(
        map(response => {
          return response.body
        }),
        delay(500),
        catchError(error => {
          return throwError(error)
        })
      )
  }

  removeTodo(id: number): Observable<any> {
    return this.http.delete<any>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      observe: 'events'
    }).pipe(
      tap(event => {
        if (event.type === HttpEventType.Sent) {
          console.log(event, ' Sent')
        }
        if (event.type === HttpEventType.Response) {
          console.log(event, ' Response')
        }

      })
    )
  }  

  completeTodo(id: number): Observable<any> {
    console.log(id)
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    })
  }

}
