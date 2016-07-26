import { Injectable } from '@angular/core';
import { PROFILE } from './mock-profile';
import { VERIFICATIONS } from './mock-verifications';
@Injectable()
export class ProfileService {
  getProfile() {
    return Promise.resolve(PROFILE);
  }
  getVerifications() {
    return Promise.resolve(VERIFICATIONS);
  }
}
