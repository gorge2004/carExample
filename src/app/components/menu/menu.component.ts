import { Component } from '@angular/core';

@Component({
  selector: 'components-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {

  public logo: string = 'assets/imgs/toyota/logo-toyota.svg';
  public items = [
    {
      label: 'Facebook',
      icon: 'assets/imgs/icons/facebook.svg',
      url: "https://www.facebook.com",
      escape: false,

    },
    {
      label: 'Instagram',
      icon: 'assets/imgs/icons/instagram.svg',
      escape: false,
      url: "https://www.instagram.com",
    },
    {
      label: 'tiktok',
      icon: 'assets/imgs/icons/tiktok.svg',
      escape: false,
      url: "https://www.tiktok.com",

    },
    {
      label: 'whatsapp',
      icon: 'assets/imgs/icons/whatsapp.svg',
      escape: false,
      url: "https://api.whatsapp.com/send?phone=1455323423",

    }

    /* ,
    {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
    },
    {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
    },
    {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
    } */,
  ];
}
