import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../types/course.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.scss'],
})
export class SingleCourseComponent implements OnInit {
  @Input() course!: Course;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product: Course) {
    this.cartService.addToCart(product);
  }
}
