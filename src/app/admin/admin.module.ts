import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/component/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './shared/services/auth.guard';
import { SearchPipe } from './shared/search.pipe';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    SearchPipe
  ],
  imports: [
    //including base directives, pipes, NgIf and others. CommonModule the part of BrowserModule
    CommonModule,
    //both modules (FormsModule, ReactiveFormsModule) using for make reactive forms
    FormsModule,
    ReactiveFormsModule,
    //общий модуль с http клиетом???
    SharedModule,
    //RouterModule.forChild that means this is additational router, start working the main give the comand
    RouterModule.forChild([
      {path: '', component: AdminLayoutComponent, children: [
        {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
        {path: 'login', component: LoginPageComponent},
        // canActivate: [AuthGuard] guard запускаеться при доступе к странице
        {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
        {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
        {path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]},
      ]}
    ])
  ],
  //exporting routs, main rout will this rout rulls
  exports: [
    RouterModule
  ],
  //регестрируем сервис аутентификации
  providers: [AuthGuard]
})
export class AdminModule {

}