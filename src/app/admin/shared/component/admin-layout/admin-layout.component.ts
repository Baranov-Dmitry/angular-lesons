import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  //
  constructor(
    private router: Router,
    //для использования в шаблоне пременной auth делаем ее публичной
    public auth: AuthService) { }

  ngOnInit(): void {
  }

  logout(event: Event) {
    //прерываем цепочку действий а имено переход по ссылке
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/admin', 'login'])
  }

}
