import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar/navbar.component';
import { TextProtectedReCatpchaComponent } from './text-protected-re-catpcha/text-protected-re-catpcha.component';
import { BackBtnComponent } from './back-btn/back-btn.component';



@NgModule({
  declarations: [
    NavbarComponent,
    TextProtectedReCatpchaComponent,
    BackBtnComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    NavbarComponent,
    TextProtectedReCatpchaComponent,
    BackBtnComponent
  ],
})
export class ComponentsModule { }
