import { Injectable, OnInit } from '@angular/core';
import { Course } from './types/course.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  courseList: Course[] = [];

  constructor(private router: Router) {
    this.courseList = JSON.parse(localStorage.getItem('items') || '[]');
  }
  ngOnInit(): void {}
  addToCart(product: Course) {
    for (let i = 0; i < this.courseList.length; i++) {
      if (this.courseList[i].title === product.title) {
        this.router.navigate(['/details']);
        return;
      }
    }
    this.courseList.push(product);
    this.syncItems();
    this.router.navigate(['/details']);
  }

  getItems() {
    return this.courseList;
  }

  remove(product: Course) {
    const index = this.courseList.indexOf(product);
    this.courseList.splice(index, 1);
    this.syncItems();
  }

  syncItems() {
    localStorage.setItem('items', JSON.stringify(this.courseList)); // sync the data
  }
}
