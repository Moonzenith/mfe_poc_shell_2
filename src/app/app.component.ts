import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Shop Platform';
  shopName = 'Shop Platform';
  form: any = {};
  disableShopInfo: boolean = true;

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
    this.disableShopInfo = false;
    this.title = 'Shop Platform';
    this.shopName = 'Shop Platform';
    this.form = {
      shopName: this.shopName,
      shopId: '999999',
      shopAddress: 'web based',
      shopPhone: 'N/A',
      clientName: 'Web Client',
      clientId: '192.123.12.1.92',
    };
    this.sendFormInfo();
  }

  emptyData(event: any) {
    this.title = 'Shop Platform';
    this.shopName = 'Shom Platform';
    this.disableShopInfo = true;
    this.form = {};
    this.sendFormInfo();
  }
}
