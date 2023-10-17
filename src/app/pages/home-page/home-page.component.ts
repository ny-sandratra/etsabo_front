import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as AOS from 'aos';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss',
  '../../../../node_modules/font-awesome/css/font-awesome.css',],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
