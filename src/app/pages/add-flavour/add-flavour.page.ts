import { Component, OnInit, SecurityContext } from '@angular/core';
import { Router } from '@angular/router';
import { FlavourRepository } from 'src/app/repositories/flavour.repository';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Camera, CameraResultType } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-add-flavour',
  templateUrl: './add-flavour.page.html',
  styleUrls: ['./add-flavour.page.scss'],
})
export class AddFlavourPage implements OnInit {

  image: any = `../../../assets/img/imagePlaceholder.svg`


  constructor(private router: Router, 
    private databaseQueries: FlavourRepository,
    private sanitization: DomSanitizer,
  ) {}

  ngOnInit() {

  }

  navigate() {
    this.router.navigate(['/home']);
  }

  async submitFlavour(flavour){
    flavour.PhotoName = this.image
    await this.databaseQueries.createFlavour(flavour).then(res => {
      console.log(res)
    })

    this.router.navigate(['/home'])
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    })

    this.image = image.webPath

    console.log(this.image)

  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  
    // Can be set to the src of an image now
  };



  Scan = async () => {
    BarcodeScanner.hideBackground(); 
    document.body.classList.add("qrscanner");
  
    const result = await BarcodeScanner.startScan();
  
    if (result.hasContent) {
      console.log(result.content); 
    }

    // TODO(FRANCOIS): Retrieve data as per barcode - barcode has unique identifier

    document.body.classList.remove("qrscanner");

  }
}
