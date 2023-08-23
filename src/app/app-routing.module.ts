import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { TypographyComponent } from './pages/ui-features/typography/typography.component';
import { UiFeaturesComponent } from './pages/ui-features/ui-features.component';
import { LoginGuard, PageGuard } from './app-routing.guard';



export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.NgxAuthModule),
    canActivate: []
  },
  // {
  //   path:'ui-features/typography/:ticker', component: TypographyComponent,
  //   // component:UiFeaturesComponent,
  //   // children:[
  //   //   {
  //   //     path: './typography/:ticker', component: TypographyComponent
  //   //   }
  //   // ]

  // },

  // {
  //   path: 'auth',
  //   component: NbAuthComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'login',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'register',
  //       component: NbRegisterComponent,
  //     },
  //     {
  //       path: 'logout',
  //       component: NbLogoutComponent,
  //     },
  //     {
  //       path: 'request-password',
  //       component: NbRequestPasswordComponent,
  //     },
  //     {
  //       path: 'reset-password',
  //       component: NbResetPasswordComponent,
  //     },
  //     {
  //       path: '',
  //       component: NbAuthComponent,  // <---
  //     },
  //   ],
  // },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
