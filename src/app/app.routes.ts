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
import { StatusComponent } from './Admin/status/status.component';
import { ColourComponent } from './Admin/colour/colour.component';
import { ColourViewComponent } from './Admin/colour-view/colour-view.component';
import { CustomerRegistrationComponent } from './Guest/customer-registration/customer-registration.component';
import { CustomerMasterComponent } from './Customer/customer-master/customer-master.component';
import { CustProductsComponent } from './Customer/cust-products/cust-products.component';
import { ProductCardComponent } from './Customer/product-card/product-card.component';
import { MyOrderComponent } from './Customer/my-order/my-order.component';
import { OrderViewComponent } from './Admin/order-view/order-view.component';
import { OrderDetailsComponent } from './Admin/order-details/order-details.component';

export const routes: Routes = [
    {path: '', component:GuestHomeComponent},
    {path: 'login',component:LoginComponent},
    {path: 'registration', component:CustomerRegistrationComponent},
    {path:'admin',component:AdminMasterComponent,
        children:[
            { path: '', redirectTo: 'adminhome', pathMatch: 'full' },
             {path:'adminhome',component:AdminHomeComponent},
             {path:'category',component:CategoryComponent},
             {path:'brand' ,component:BrandsComponent},
             {path:'product' , component:ProductComponent},
             {path:'status', component:StatusComponent},
             {path:'colour', component:ColourComponent},
             {path:'colourview', component:ColourViewComponent},
             {path:'categoryview' , component:CategoryViewComponent},
             {path:'brandview' , component:BrandViewComponent},
             {path:'productview' , component:ProductViewComponent},
             {path:'orderview',component:OrderViewComponent},
             {path:'orderdetails/:id', component:OrderDetailsComponent}
             
        ]},
    {path: 'customer',component:CustomerMasterComponent,
        children:[
            { path: '', redirectTo: 'customerhome', pathMatch: 'full' },
            {path: 'customerhome',component:CustomerHomeComponent},
            {path: 'products',component:CustProductsComponent},
            {path: 'product/:id',component:ProductCardComponent},
            {path:'myorders',component:MyOrderComponent},
        ]
    }
];
