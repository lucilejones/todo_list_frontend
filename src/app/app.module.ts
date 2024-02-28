import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { authGuard } from './auth.guard';
import { noAuthGuard} from './no-auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoListComponent} from './todo-list/todo-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthTokenInterceptor } from './auth-token.interceptor';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{
		path: 'login',
		loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
    canActivate: [noAuthGuard],
	},
  {
		path: 'signup',
		loadComponent: () => import('./signup/signup.component').then((m) => m.SignupComponent),
		canActivate: [noAuthGuard],
	},
  {
		path: 'todo-list',
		loadComponent: () => import('./todo-list/todo-list.component').then((m) => m.TodoListComponent),
		canActivate: [authGuard],
	},
];

@NgModule({
  declarations: [
    AppComponent,
    // TodoListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

