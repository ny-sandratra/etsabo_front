import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss',
  '../../../../node_modules/font-awesome/css/font-awesome.css',],
  encapsulation: ViewEncapsulation.None
})
export class PatientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
