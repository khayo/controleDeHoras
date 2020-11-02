import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HorasRoutes } from "./horas";
import { PainelRoutes } from './painel-controle';


const routes: Routes = [
/*   {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }, */
  {
    path: '',
    redirectTo: '/horas/listar',
    pathMatch: 'full'
  },
  ...HorasRoutes,
  ...PainelRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
