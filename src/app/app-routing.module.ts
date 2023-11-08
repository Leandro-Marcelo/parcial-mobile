import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/authenticated/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'continue-with',
    loadChildren: () => import('./pages/publicPages/login/login.module').then( m => m.Loginv2PageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/publicPages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'plan-your-ride',
    loadChildren: () => import('../app/pages/authenticated/PlanYourRide/plan-your-ride/plan-your-ride.module').then( m => m.PlanYourRidePageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/publicPages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
