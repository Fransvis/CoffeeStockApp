import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  authSubject = new BehaviorSubject(false);

  constructor() {
    if (
      localStorage.getItem('LOGGEDIN') &&
      localStorage.getItem('LOGGEDIN') == 'YES'
    ) {
      // this.isLoggedIn = true;
      this.authSubject.next(true);
    }
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }

  async login(user) {
    if (user.name == "admin" && user.password == "demo") {
      localStorage.setItem("LOGGEDIN", "YES");
      this.authSubject.next(true);
    }
  }

  logout() {
    this.authSubject.next(false);
  }
}
