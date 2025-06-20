import { Routes } from '@angular/router';
import { GuestHomeComponent } from './Guest/guest-home/guest-home.component';
import { LoginComponent } from './Guest/login/login.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { CustomerHomeComponent } from './Customer/customer-home/customer-home.component';
import { CategoryComponent } from './Admin/category/category.component';
import { AdminMasterComponent } from './Admin/admin-master/admin-master.component';
import { BrandsComponent } from './Admin/brands/brands.component';
import { ProductComponent } from './Admin/product/product.component';
import { CategoryViewComponent } from './Admin/category-view/category-view.component';
import { BrandViewComponent } from './Admin/brand-view/brand-view.component';
import { ProductViewComponent } from './Admin/product-view/product-view.component';

export const routes: Routes = [
    {path: '', component:GuestHomeComponent},
    {path: 'login',component:LoginComponent},
    {path:'admin',component:AdminMasterComponent,
        children:[
            { path: '', redirectTo: 'adminhome', pathMatch: 'full' },
             {path:'adminhome',component:AdminHomeComponent},
             {path:'category',component:CategoryComponent},
             {path:'brand' ,component:BrandsComponent},
             {path:'product' , component:ProductComponent},
             {path:'categoryview' , component:CategoryViewComponent},
             {path:'brandview' , component:BrandViewComponent},
             {path:'productview' , component:ProductViewComponent},
        ]},
   {path: 'categories',component:CategoryComponent},
    {path: 'customerhome',component:CustomerHomeComponent}
];
