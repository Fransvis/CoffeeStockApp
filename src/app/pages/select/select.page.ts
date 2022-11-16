import { IonItemSliding } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { ProductRepository } from 'src/app/repositories/product.repository';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
  removeItem = true;
  constructor(public productService: ProductService , private productRepository: ProductRepository) { }

  async ngOnInit() {
    await this.getProducts()
  }

  async handleSlide(event: any, index:any, slideItem:IonItemSliding, product:any) {   
    let amount = event.detail.amount;

    if(amount < -20){
      product['active'] = 'right'
    } else if (amount > 20){
      product['active'] = 'left'
    } else {
      product['active'] = ''
    }
    
    if(amount < -150 && this.removeItem){

      product['active'] = true;
      await slideItem.close(); 
      this.removeItem = false;
      this.productService.storedProducts.splice(index, 1);
      this.productService.saveProducts(this.productService.storedProducts);
      this.productService.presentToast("top", 'product selected');

      console.log(this.productService.storedProducts)

    } else if(amount > 150 && this.removeItem){
     
      await slideItem.close(); 
      this.removeItem = false;
      this.productService.storedProducts.splice(index, 1);
      this.productService.saveProducts(this.productService.storedProducts);
      this.productService.presentToast("top", 'product dismissed');

    } 

    setTimeout(() => {
      this.removeItem = true
    }, 950);
    // console.log(ratio);
  }

  async getProducts() {
    await this.productRepository.createTestData();
    this.productService.storedProducts = await this.productRepository.getProducts();
    console.log(`databaseService used: products:`);
    console.log(this.productService.storedProducts);

    //normal db open db close version
    // await this.productDefaultQueryRepository.getProducts();
    // console.log(`default dbopen dbclose used:`);
    // console.log(this.products);
  }

}
