import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { AdminMenu, UserMenu } from './sidebar.enum';


interface ItemMenu {
  description: string;
  itemMenu: AdminMenu | UserMenu;
  icon: MatIcon;
  paths: string[];
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidebarOpen: boolean = false;
  sidebarWidth: string = "3.5rem";
  margin = '18px'
  route: any = "";
  userEnum = UserMenu;
  userMenu: UserMenu = UserMenu.home;

  // topbarUserList: Array<ItemMenu> = [
  //   {
  //     description: 'Comprimi',
  //     itemMenu: UserMenu.compress,
  //     icon: faBars,
  //     paths: []
  //   },
  //   {
  //     description: 'Home',
  //     itemMenu: UserMenu.home,
  //     icon: faHome,
  //     paths: [],
  //   },
  //   {
  //     description: 'Lista Clienti',
  //     itemMenu: UserMenu.listClient,
  //     icon: faUserGroup,
  //     paths: ["/cliente-list"],
  //   },

  //   {
  //     description: 'Campi',
  //     itemMenu: UserMenu.campi,
  //     icon: faTableTennis,
  //     paths: ["/campi-list"],
  //   },
  //   {
  //     description: 'Prenotazioni',
  //     itemMenu: UserMenu.reservation,
  //     icon: ,
  //     paths: ["/reservation"],
  //   },
  //   {
  //     description: 'Tesserati',
  //     itemMenu: UserMenu.listTessera,
  //     icon: faUsersLine,
  //     paths: ["/tesseramenti"],
  //   },

  // ]
}
