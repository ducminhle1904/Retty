import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Course } from '../types/course.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [],
})
export class IndexComponent implements OnInit {
  public courseList!: Course[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((res) => {
      this.courseList = res;
    });
  }
}
