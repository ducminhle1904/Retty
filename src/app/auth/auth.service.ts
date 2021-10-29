import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isChooseCourse = false;
  redirectUrl: string;
  constructor() {}

  choose(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap((val) => (this.isChooseCourse = true))
    );
  }
}
