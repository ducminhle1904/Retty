import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './types/course.model';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<Course[]> {
    return this.http.get<Course[]>(
      'https://api.npoint.io/9ea427ff28679a161c60'
    );
  }
}
