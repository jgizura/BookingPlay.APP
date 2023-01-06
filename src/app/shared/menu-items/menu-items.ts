import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navegación',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },

      // Ejemplo para cuando un menu tenga un sobre menu
      // {
      //   state: 'basic',
      //   short_label: 'B',
      //   name: 'Basic Components',
      //   type: 'sub',
      //   icon: 'ti-layout-grid2-alt',
      //   children: [
      //     {
      //       state: 'button',
      //       name: 'Button'
      //     },
      //     {
      //       state: 'typography',
      //       name: 'Typography'
      //     }
      //   ]
      // }
    ],
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
