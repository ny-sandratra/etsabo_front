import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DropDownComponent } from '../drop-down/drop-down.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss',
  '../../../../node_modules/font-awesome/css/font-awesome.css',],
  encapsulation: ViewEncapsulation.None
})
export class ConsultationComponent implements OnInit {

  userInfo: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token');
    if(token){
      this.userService.setUserInfo(token);
      this.userInfo = this.userService.getUserInfo();
      
    }
  }

}
