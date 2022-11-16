import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:any = [
    {
      otc: "",
      qty: 16,
      width: "",
      weight: 0,
      height: "",
      size: "EA",
      length: "",
      price: 57.95,
      was_price: 0,
      store_id: 158,
      retailer_id: 2,
      category_id: 12,
      product_id: 3742,
      max_quantity: 15,
      store_product_id: 43728,
      barcode: "6009673800287",
      sku_code: "000000000156796002",
      name: "Alettes Rusks 450g Coconut",
      linked_key: "5fb5210ca3768600043195f4",
      image: "https://www.dischem.co.za/media/catalog/product/5/d/5d4988212c6d4_6009673800287.jpg",
      description: "Digestive bran and buttermilk rusks with a coconut flavour Ingredients Wheat Flour, Vegetable Oils And Fats, Sugar, Water, Dessicated Coconut (4%), Digestive Bran, Pasteurized Liquid Egg, Raising Agent, Milk Powder, Flavourant, Salt"
    },
    {
      otc: "",
      qty: 16,
      width: "",
      weight: 0,
      height: "",
      size: "EA",
      length: "",
      price: 57.95,
      was_price: 0,
      store_id: 158,
      retailer_id: 2,
      category_id: 12,
      product_id: 3742,
      max_quantity: 15,
      store_product_id: 43728,
      barcode: "6009673800287",
      sku_code: "000000000156796002",
      name: "Alettes Rusks 450g Coconut",
      linked_key: "5fb5210ca3768600043195f4",
      image: "https://www.dischem.co.za/media/catalog/product/5/d/5d4988212c6d4_6009673800287.jpg",
      description: "Digestive bran and buttermilk rusks with a coconut flavour Ingredients Wheat Flour, Vegetable Oils And Fats, Sugar, Water, Dessicated Coconut (4%), Digestive Bran, Pasteurized Liquid Egg, Raising Agent, Milk Powder, Flavourant, Salt"
    },
    {
      otc: "",
      qty: 16,
      width: "",
      weight: 0,
      height: "",
      size: "EA",
      length: "",
      price: 57.95,
      was_price: 0,
      store_id: 158,
      retailer_id: 2,
      category_id: 12,
      product_id: 3742,
      max_quantity: 15,
      store_product_id: 43728,
      barcode: "6009673800287",
      sku_code: "000000000156796002",
      name: "Alettes Rusks 450g Coconut",
      linked_key: "5fb5210ca3768600043195f4",
      image: "https://www.dischem.co.za/media/catalog/product/5/d/5d4988212c6d4_6009673800287.jpg",
      description: "Digestive bran and buttermilk rusks with a coconut flavour Ingredients Wheat Flour, Vegetable Oils And Fats, Sugar, Water, Dessicated Coconut (4%), Digestive Bran, Pasteurized Liquid Egg, Raising Agent, Milk Powder, Flavourant, Salt"
    },
    {
      otc: "",
      qty: 16,
      width: "",
      weight: 0,
      height: "",
      size: "EA",
      length: "",
      price: 57.95,
      was_price: 0,
      store_id: 158,
      retailer_id: 2,
      category_id: 12,
      product_id: 3742,
      max_quantity: 15,
      store_product_id: 43728,
      barcode: "6009673800287",
      sku_code: "000000000156796002",
      name: "Alettes Rusks 450g Coconut",
      linked_key: "5fb5210ca3768600043195f4",
      image: "https://www.dischem.co.za/media/catalog/product/5/d/5d4988212c6d4_6009673800287.jpg",
      description: "Digestive bran and buttermilk rusks with a coconut flavour Ingredients Wheat Flour, Vegetable Oils And Fats, Sugar, Water, Dessicated Coconut (4%), Digestive Bran, Pasteurized Liquid Egg, Raising Agent, Milk Powder, Flavourant, Salt"
    }
  ]

  emptyProducts = false;
  storedProducts:any = [];

  constructor(private toastController: ToastController) {}

  async presentToast(position: 'top' | 'middle' | 'bottom', message) {
    const toast = await this.toastController.create({
      duration: 1500,
      message: message,
      position: position
    });

    await toast.present();
  }


  async saveProducts(updatedProducts:any){
   
  }

  async initProducts(){

   
  }

  
}
