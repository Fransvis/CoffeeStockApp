import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdGuard implements CanActivate {

  constructor( private authService: AuthService,  private navCtrl: NavController, private router: Router  ) {}

 async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Promise<boolean> {
      return await this.checkAuth()
  } 

  private async checkAuth() {    
    let isAuthenticated = false
    this.authService.isLoggedIn().subscribe(res => {
      if (res == true){
        isAuthenticated = true
      } else {
        this.router.navigate(['/login'])
      }
    })
    return isAuthenticated
  }
  
}
