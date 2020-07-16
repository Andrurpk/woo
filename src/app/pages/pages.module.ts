import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// para no importar el AppRouterModule completo y solo utilizar <el router-oulet>
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from '../shared/shared.module';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PedidosComponent } from './pedidos/pedidos.component';





@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    PedidosComponent,
  ],
  exports:[
    DashboardComponent,
    PagesComponent,
    PedidosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatTableModule,  MatFormFieldModule,
    MatInputModule, MatProgressSpinnerModule,
  ]
})
export class PagesModule { }
