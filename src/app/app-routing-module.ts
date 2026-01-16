import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'javascript' },
  {
    path: 'javascript',
    loadChildren: () => import('./javascript/javascript-module').then((m) => m.JavascriptModule),
  },
  { path: 'angular', loadChildren: () => import('./angular/angular-module').then(m => m.AngularModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
