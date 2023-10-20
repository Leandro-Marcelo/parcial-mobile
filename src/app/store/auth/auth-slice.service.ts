import { Injectable } from '@angular/core';
import {
  CurrentUser,
  PublicUser,
} from '../../../../../../backend/auth/src/domain/utils/interfacesAndTypes';
import { CURRENT_USER_RESET } from '../../../../../../backend/auth/src/domain/constants/entities';

@Injectable({
  providedIn: 'root',
})
export class AuthSliceService {
  currentUser = CURRENT_USER_RESET
  emailToVerify = ""
  accountToVerif: PublicUser | null = null

  constructor() {}

    resetCurrentUserReducer() {
      this.currentUser = CURRENT_USER_RESET;
    }

    setCurrentUserReducer(currentUser: CurrentUser) {
      this.currentUser = currentUser;
    }

    setEmailToVerifyReducer(emailToVerify: string) {
      this.emailToVerify = emailToVerify;
    }

}
