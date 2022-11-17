import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth/auth.service";
import { AuthgaurdGuard } from "src/app/services/auth/authgaurd.guard";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  async login(form: any) {
    await this.authService.login(form.value);
    this.router.navigateByUrl("home");
    // this.authService.logout()
  }

  ionViewWillEnter() {
    this.authService.isLoggedIn().subscribe((res) => {
      if (res == true) {
        this.router.navigate([""]);
      }
    });
  }
}
