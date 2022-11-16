import { IonItemSliding } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductRepository } from 'src/app/repositories/product.repository';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})

export class DiscoverPage implements OnInit {
  
  products:any = []
  @ViewChild('sliding', { static: false }) sliding: IonItemSliding;

  constructor( ) { 
    
  }

  async ngOnInit() {
      // this.getProducts();
  }

  onClick(){
    console.log('click')
  }

  handleSlide(event: any) {    
    this.sliding.getSlidingRatio()
    .then((val:any) => {
      if(val < 0){
        console.log('right')
      } else {
        console.log('left')
      }
    })
    .catch(err => {
      console.log({err});
    });
  }

}
