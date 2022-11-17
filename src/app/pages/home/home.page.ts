import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FlavourRepository } from 'src/app/repositories/flavour.repository';
import { MiscService } from 'src/app/services/misc.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  flavours: any = []

  constructor(private router: Router, 
    private databaseQueries: FlavourRepository, 
    public misc: MiscService,
    private sanitization: DomSanitizer,
    ) {
  }


  ngOnInit() {

  }

  getFlavours(){
    this.databaseQueries.getFlavours().then(res => {
      res.forEach(flavour => {
        let image = flavour.PhotoName
        flavour.PhotoName = this.sanitization.sanitize(SecurityContext.RESOURCE_URL, this.sanitization.bypassSecurityTrustResourceUrl(image));
      })
      console.log(res)
      this.flavours = res
    })
  }

  ionViewWillEnter(){
    this.getFlavours()
  }

  navigate(route: any){
    this.router.navigate([`/${route}`])
  }
  navigateEdit(route){
    this.router.navigate([`/edit-flavour/${route.ID}`])
  }

  async removeFlavour(flavour: any){
    await this.misc.showConfirm("Delete", "Are you sure you would like to delete this flavour?").then(res => {
      if (res == true){
        this.misc.showAlert("Success", "Succesfully removed flavour")
        this.databaseQueries.deleteFlavourById(flavour.ID).then(res => {
          this.getFlavours()
        })
      }
    })
  }

  

}
