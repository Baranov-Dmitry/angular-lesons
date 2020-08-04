import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService {

  private IsAuth: boolean = false

  logIn() {
    this.IsAuth = true
  }

  logOut() {
    this.IsAuth = false
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      setTimeout(()=>{
        resolve(this.IsAuth)
      }, 1000)
    })
  }

}