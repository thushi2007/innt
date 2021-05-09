import {Injectable} from '@angular/core';

export const menuitemLst: any[] = [
  {
    Text: 'Home',
    Url: '/home'
  },
  {
    Text: 'Immobilien',
    UrlPattern: 'immobilien',
    Children: [
      {
        Text: 'Verkauf Ihrer Immobilie',
        Url: '/immobilien/verkauf'
      },
      {
        Text: 'Kauf einer Immobilie',
        Url: '/immobilien/kauf'
      },
      {
        Text: 'Renovierung & Sanierung',
        Url: '/immobilien/renovierungsanierung'
      },
      {
        Text: 'Anfrage',
        Url: '/immobilien/anfrage'
      }
    ]
  },
  {
    Text: 'Umzugsservice',
    UrlPattern: 'umzugsservice',
    Url: '',
    Children: [
      {
        Text: 'Geschäftsumzug',
        Url: '/umzugsservice/geschaeftsumzug'
      },
      {
        Text: 'Privatumzug',
        Url: '/umzugsservice/privatumzug'
      },
      {
        Text: 'Anfrage',
        Url: '/umzugsservice/anfrage'
      }
    ]
  },
  {
    Text: 'Reinigungsservice',
    Url: '',
    UrlPattern: 'reinigungsservice',
    Children: [
      {
        Text: 'Umzugsreinigung',
        Url: '/reinigungsservice/umzugsreinigung'
      },
      {
        Text: 'Unterhaltsreinigung',
        Url: '/reinigungsservice/unterhaltungsreinigung'
      },
      {
        Text: 'Baureinigung',
        Url: '/reinigungsservice/baureinigung'
      },
      {
        Text: 'Entsorgung und Reinigung',
        Url: '/reinigungsservice/entsorgungraeumung'
      },
      {
        Text: 'Anfrage',
        Url: '/reinigungsservice/anfrage'
      }
    ]
  },
  {
    Text: 'Transportservice',
    UrlPattern: 'transportservice',
    Children: [
      {
        Text: 'Paketlieferung',
        Url: '/transportservice/paketlieferung'
      },
      {
        Text: 'Tourlieferungen',
        Url: '/transportservice/tourlieferung'
      },
      {
        Text: 'Weitere Transporte',
        Url: '/transportservice/weiterelieferung'
      },
      {
        Text: 'Anfrage',
        Url: '/transportservice/anfrage'
      }
    ]
  },
  {
    Text: 'Hauswartung',
    UrlPattern: 'hauswartung',
    Children: [
      {
        Text: 'Wartung',
        Url: '/hauswartung/wartung'
      },
      {
        Text: 'Anfrage',
        Url: '/hauswartung/anfrage'
      }
    ]
  },
  {
    Text: 'Kontakt',
    Url: '/kontakt'
  },
  {
    Text: 'Benutzerkonto',
    OnlyMobile: true,
    Url: '',
    UrlPattern: 'notLoggedIn',
    Children: [
      {
        Text: 'Anmelden',
        Url: '/anmelden'
      },
      {
        Text: 'Registrieren',
        Url: '/registrieren'
      },
      {
        Text: 'Passwort vergessen',
        Url: '/pwtvergessen'
      }
    ]
  },
];

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: any[];

  constructor() {
    this.menuItems = menuitemLst;
  }

  getMenuItemWithChildren(urlkey: string): any[] {
    return this.menuItems.filter((obj: any) => {
      const pattern = urlkey.replace('/', '');
      return obj.Url === urlkey || (obj?.UrlPattern === pattern);
    });
  }
}
