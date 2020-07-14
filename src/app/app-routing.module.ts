import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PagesComponent } from './pages/pages.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const routes: Routes = [
    {  
      path: '', 
      component: PagesComponent,
      children: [
        {  path:'dashboard', component: DashboardComponent},
        {  path: 'pedidos', component: PedidosComponent  },
        {  path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
      ]
    }, 
    {  path:'login', component: LoginComponent},
    {  path: '**', component: NopagefoundComponent }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
