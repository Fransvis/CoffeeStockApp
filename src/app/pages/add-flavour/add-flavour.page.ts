import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlavourRepository } from 'src/app/repositories/flavour.repository';
// import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-add-flavour',
  templateUrl: './add-flavour.page.html',
  styleUrls: ['./add-flavour.page.scss'],
})
export class AddFlavourPage implements OnInit {

  image = `../../../assets/img/imagePlaceholder.svg`


  constructor(private router: Router, 
    private databaseQueries: FlavourRepository
  ) {}

  ngOnInit() {

  }

  navigate() {
    this.router.navigate(['/home']);
  }

  async addFlavour(){
    console.log("adding new flavour")
    let new_flavour = {
      name: "Ristretto",
      Barcode: "1392193293",
      PricePerBox: 250,
      PricePerPod: 18,
      PodsPerBox: 15,
      PhotoName: "photo name"
    }

    await this.databaseQueries.createFlavour(new_flavour).then(res => {
      console.log(res)
    })

    this.router.navigate(['/home'])
  }




  // async Scan() {
  //   this.barcodeScanner.scan().then(barcodeData => {
  //     console.log('Barcode data', barcodeData);
  //    }).catch(err => {
  //        console.log('Error', err);
  //    });
  // }
}
