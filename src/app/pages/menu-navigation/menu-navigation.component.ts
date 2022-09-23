import { Component, OnInit } from '@angular/core' 
import { navigationMenu } from 'src/app/model/menu' 

@Component({
  selector: 'app-menu-navigation',
  templateUrl: './menu-navigation.component.html',
  styleUrls: ['./menu-navigation.component.scss']
})
export class MenuNavigationComponent implements OnInit {
  navigationMenu: any = navigationMenu 

  constructor() {}

  ngOnInit(): void {}

}
