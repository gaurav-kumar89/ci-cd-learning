import {  inject } from '@angular/core';
import { Router,  ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChildFn } from '@angular/router';
import { AccountService } from '../service/account.service';

export const AuthGuard: CanActivateChildFn = () => {

    let _router = inject(Router);
    let issLoggedId = inject(AccountService).isAuthenticated();
//
  //  let issLoggedId = localStorage.getItem('token');
    console.log(issLoggedId, 'guard');
    if(issLoggedId === null || issLoggedId === false){
        // alert('You are not Authentificated user !!');
         _router.navigate(['/login']);
        return false;
    }
    return true;

}