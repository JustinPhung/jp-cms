import { Injectable } from '@angular/core';


@Injectable()
export class JpAuthService {
  constructor() {}
  // ...
  public isAuthenticated(): boolean {
    // Check whether the token is expired and return
    // true or false
    return false;
  }
}
