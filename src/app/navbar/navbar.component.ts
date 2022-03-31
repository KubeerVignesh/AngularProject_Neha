import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() public navData: any;
  @Input () public navList:any;
  @Output() navItem = new EventEmitter;

  getNavItem(event:Event){
    this.navItem.emit(event);
    console.log(event)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
