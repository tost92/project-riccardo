import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminMenu, UserMenu } from './sidebar.enum';


interface ItemMenu {
  description: string;
  itemMenu: AdminMenu | UserMenu;
  icon: string;
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

  topbarUserList: Array<ItemMenu> = [
    {
      description: 'Comprimi',
      itemMenu: UserMenu.compress,
      icon: "menu",
      paths: []
    },
    {
      description: 'Home',
      itemMenu: UserMenu.home,
      icon: "add",
      paths: [],
    },
    {
      description: 'Lista Clienti',
      itemMenu: UserMenu.listClient,
      icon:"search",
      paths: ["/cliente-list"],
    },

    {
      description: 'Campi',
      itemMenu: UserMenu.magazzino,
      icon: "add",
      paths: ["/campi-list"],
    },
    {
      description: 'Prenotazioni',
      itemMenu: UserMenu.reservation,
      icon: "add",
      paths: ["/reservation"],
    },
    {
      description: 'Tesserati',
      itemMenu: UserMenu.listTessera,
      icon: "add",
      paths: ["/tesseramenti"],
    },

  ]

  constructor(public router:Router){}

  openCloseSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    if (this.sidebarOpen) {
      this.sidebarWidth = "14rem";
    } else {
      this.sidebarWidth = "3.5rem";
    }
  }



  navigate(itemMenu: AdminMenu | UserMenu) {

    let path = "";

    switch (itemMenu) {
      case this.userEnum.home:
        path = ""
        this.userMenu = itemMenu;
        break;

      case this.userEnum.listClient:
        path = "/cliente-list";
        this.userMenu = itemMenu;
        break;


      case this.userEnum.reservation:
        path = "/reservation";
        this.userMenu = itemMenu;
        break;

      case this.userEnum.listTessera:
        path = "/tesseramenti";
        this.userMenu = itemMenu;
        break;


    }
    this.router.navigate([path]);
  }




  isSelected(value: AdminMenu | UserMenu) {

    return this.userMenu == value;

  }
}
