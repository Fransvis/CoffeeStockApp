import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlavourRepository } from 'src/app/repositories/flavour.repository';
import { MiscService } from 'src/app/services/misc.service';

@Component({
  selector: 'app-edit-flavour',
  templateUrl: './edit-flavour.page.html',
  styleUrls: ['./edit-flavour.page.scss'],
})
export class EditFlavourPage implements OnInit {

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private databaseQuery: FlavourRepository,
    public misc: MiscService) { }

  ID

  name
  Barcode
  PricePerBox
  PricePerPod
  PodsPerBox
  PhotoName

  ngOnInit() {
    this.ID = this.route.snapshot.paramMap.get('id')

    this.databaseQuery.getFavourById(this.ID).then(res => {
      this.name = res.name
      this.Barcode = res.Barcode
      this.PricePerBox = res.PricePerBox
      this.PricePerPod = res.PricePerPod
      this.PodsPerBox = res.PodsPerBox
      this.PhotoName = res.PhotoName
    })
  }

  navigate(route: any) {
    this.router.navigate([`/${route}`]);
  }

  async submitFlavour(flavour: any){
    flavour.ID = this.ID
    flavour.PhotoName = "photoName"
    await this.misc.showConfirm("Edit", "Are you sure you would like to edit this flavour?").then(res => {
      if (res == true){
        this.misc.showAlert("Success", "Succesfully edited flavour")
        this.databaseQuery.updateFlavour(flavour).then(res => {
          this.router.navigate(['/home'])
        })
      }
    })
  }

}
