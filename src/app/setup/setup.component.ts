import {Component, OnInit} from '@angular/core';
import {DigitransitService} from "../services/digitransit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  private user: any = {};

  constructor(private digitransitService: DigitransitService, private router: Router) {
  }

  setPrefrences = (formValues: any) => {
    console.log(formValues);
    localStorage.setItem('user', JSON.stringify(formValues));
    this.router.navigate(['routes']);
  };

  removePrefrences = () => {
    localStorage.removeItem('user');
    this.user = {};
  };

  ngOnInit() {
    if(localStorage.getItem('user') !== null)
      this.user = JSON.parse(localStorage.getItem('user'));
  }

}
