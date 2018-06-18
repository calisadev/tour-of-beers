import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeerComponent } from './beer/beer.component';

import { BeerDashboardViewComponent } from './beer/views/beer-dashboard-view/beer-dashboard-view.component';
import { BeerDatatableViewComponent } from './beer/views/beer-datatable-view/beer-datatable-view.component';
import { BeerDetailViewComponent } from './beer/views/beer-detail-view/beer-detail-view.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'beers/dashboard',
        pathMatch: 'full'
    }, {
        path: 'beers',
        component: BeerComponent,
        children: [
            {
                path: 'dashboard',
                component: BeerDashboardViewComponent
            }, {
                path: '',
                component: BeerDatatableViewComponent
            }, {
                path: ':id',
                component: BeerDetailViewComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {}