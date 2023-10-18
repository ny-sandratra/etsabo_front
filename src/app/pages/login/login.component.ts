import { Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../../../../node_modules/font-awesome/css/font-awesome.css',],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
