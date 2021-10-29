import { Component, OnInit } from '@angular/core';
import time from '../data/time.json';
import options from '../data/options.json';
import request from '../data/requests.json';
import { CartService } from '../cart.service';
import { Course } from '../types/course.model';
import { Time } from '../types/time.model';
import { Options } from '../types/options.model';
import { Request } from '../types/request.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public times: Time[] = time;
  public options: Options[] = options;
  public requests: Request[] = request;
  option: any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  show: boolean = false;
  selected: any;
  date = new Date().toLocaleString('en-US', this.option);

  peopleSel: any;
  peopleSelected: string;

  timeSel: any;
  timeSelected: string;

  requestSel: any;
  requestSelected: string;

  courses = this.cartService.getItems();
  constructor(private cartService: CartService) {
    this.peopleSelected = '1';
    this.timeSelected = '9:00';
    this.requestSelected = 'Book immediately';
    this.getSelecteditem();
  }

  setShow() {
    this.show = !this.show;
  }

  ngOnInit(): void {}

  remove(product: Course) {
    this.cartService.remove(product);
  }

  getSelecteditem() {
    this.peopleSel = this.options.find(
      (option) => option.value === this.peopleSelected
    );
    window.localStorage.setItem('people', this.peopleSel.value);

    this.timeSel = this.times.find((time) => time.time === this.timeSelected);
    window.localStorage.setItem('time', this.timeSel.time);

    this.requestSel = this.requests.find(
      (request) => request.name === this.requestSelected
    );
    window.localStorage.setItem('request', this.requestSel.name);
  }

  onPeopleChange(option: Options) {
    this.getSelecteditem();
  }
  onTimeChange(option: Time) {
    this.getSelecteditem();
  }
  onRequestChange(option: Request) {
    this.getSelecteditem();
  }
}
