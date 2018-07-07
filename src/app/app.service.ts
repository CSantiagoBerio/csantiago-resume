import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  inside: Boolean = false;

  goIn() {
    return true;
  }

  constructor() { }
}
