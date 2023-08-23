import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot  } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate{
    constructor(private router: Router) {
 
    }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        const account = localStorage.getItem('account');
        // 如果account有值，表示登录成功，继续跳转，否则跳转到首页
        if (account) { 
            console.log("登陆成功");
            return true; 
        }
        alert("You are not logged in!");
        this.router.navigate(["/auth/login"]);
        return false;
    }
}

@Injectable({
    providedIn: 'root'
})
export class PageGuard implements CanActivate{
    constructor(private router: Router) {
 
    }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        const account = localStorage.getItem('account');
        // 如果account有值，表示登录成功，继续跳转，否则跳转到首页
        if (account) { 
            this.router.navigate(["/pages/dashboard"]);
            return false; 
        }
        return true;
    }
}