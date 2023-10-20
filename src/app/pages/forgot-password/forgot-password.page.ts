import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { z } from 'zod';

const loginSchema = z.object({
  username: z.string().min(3).max(8),
});

interface LoginForm {
  username: string;
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  loginForm: LoginForm = {
    username: '',
  };

  constructor(public toastController: ToastController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  async presentToast(message: string, duration?: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration ? duration : 2000,
    });
    toast.present();
  }

}
