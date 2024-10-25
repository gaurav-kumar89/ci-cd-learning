import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard]},

  {path:'module', loadChildren: ()=>import('../app/modules/new-module/new-module.module').then(m=>(m.NewModuleModule))},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
