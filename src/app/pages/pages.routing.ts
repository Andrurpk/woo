import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidosComponent } from './pedidos/pedidos.component';



const routes: Routes = [
    {  
        path: 'dashboard', 
        component: PagesComponent,
        children: [
          {  path:'', component: DashboardComponent},
          {  path: 'pedidos', component: PedidosComponent  },
         // {  path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
        ]
      }, 

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}
