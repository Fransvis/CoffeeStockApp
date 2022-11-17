import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthgaurdGuard } from './services/auth/authgaurd.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthgaurdGuard],
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    canActivate: [AuthgaurdGuard],
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add-flavour',
    canActivate: [AuthgaurdGuard],
    loadChildren: () => import('./pages/add-flavour/add-flavour.module').then( m => m.AddFlavourPageModule)
  },
  {
    path: 'edit-flavour/:id',
    canActivate: [AuthgaurdGuard],
    loadChildren: () => import('./pages/edit-flavour/edit-flavour.module').then( m => m.EditFlavourPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
