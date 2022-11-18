import { Component, OnInit, SecurityContext } from '@angular/core';
import { Router } from '@angular/router';
import { FlavourRepository } from 'src/app/repositories/flavour.repository';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Camera, CameraResultType } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const IMAGE_DIR = 'stored-images';

interface LocalFile {
	name: string;
	path: string;
	data: string;
}

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
    flavour.PhotoName = this.image["changingThisBreaksApplicationSecurity"]
    await this.databaseQueries.createFlavour(flavour)

    this.router.navigate(['/home'])
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri

    })

    this.image = this.sanitization.bypassSecurityTrustResourceUrl(image.webPath)

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
