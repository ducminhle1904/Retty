import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  courses = this.cartService.getItems();
  people: string | null = '';
  time: string | null = '';
  request: string | null = '';
  day: string | null = '';
  form: FormGroup;
  submitted = false;

  constructor(
    private cartService: CartService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.people = window.localStorage.getItem('people');
    this.time = window.localStorage.getItem('time');
    this.request = window.localStorage.getItem('request');
    this.day = window.localStorage.getItem('Day');
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(11)]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.router.navigate(['/final-step']);
  }
}
