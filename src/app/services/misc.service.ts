import { Injectable } from '@angular/core';
import { Dialog } from '@capacitor/dialog';


@Injectable({
  providedIn: 'root'
})
export class MiscService {

  constructor() { }


showAlert = async (title, message) => {
    await Dialog.alert({
      title: `${title}`,
      message: `${message}`,
    });
  };

 showConfirm = async (title, message) => {
    const { value } = await Dialog.confirm({
      title: `${title}`,
      message: `${message}`,
    });
  
    return value
  };
}
