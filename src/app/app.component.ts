import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Annonymous Shop';
  shopName = '';
  form: any = {};
  disableShopInfo: boolean = false;

  sendFormInfo() {
    window.dispatchEvent(
      new CustomEvent('addOriginData', {
        detail: {
          origin: this.shopName,
          title: this.title,
          disableShopInfo: this.disableShopInfo,
          form: this.form,
        },
      })
    );
  }

  constructor() {
    window.addEventListener('ready', (readyEvent: any) => {
      Promise.resolve().then(() => {
        this.sendFormInfo();
      });
    });
  }

  fillData(event: any) {
    this.disableShopInfo = true;
    this.title = 'Smart Shop';
    this.shopName = 'Smart Shop';
    this.form = {
      shopName: this.shopName,
      shopId: '123456',
      shopAddress: '1234 Main St, Anytown, USA',
      shopPhone: '123-456-7890',
      clientName: 'John Doe',
      clientId: '098765634',
    };
    this.sendFormInfo();
  }

  emptyData(event: any) {
    this.title = 'Annonymous Shop';
    this.shopName = '';
    this.disableShopInfo = false;
    this.form = {};
    this.sendFormInfo();
  }
}
