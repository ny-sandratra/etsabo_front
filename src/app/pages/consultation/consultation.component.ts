import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss',
  '../../../../node_modules/font-awesome/css/font-awesome.css',],
  encapsulation: ViewEncapsulation.None
})
export class ConsultationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
