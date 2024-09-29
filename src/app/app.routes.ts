import { Routes } from '@angular/router';
import { LayoutWebsiteComponent } from './layouts/layout-website/layout-website.component';
import { HomeComponent } from './page/home/home.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { ProductsComponent } from './page/admin/products/products.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductAddComponent } from './page/admin/products/product-add/product-add.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutWebsiteComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'products/create',
        component: ProductAddComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
