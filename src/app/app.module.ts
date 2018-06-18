import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule  } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { BeerDashboardViewComponent } from './beer/views/beer-dashboard-view/beer-dashboard-view.component';
import { BeerDetailViewComponent } from './beer/views/beer-detail-view/beer-detail-view.component';
import { BeerDatatableViewComponent } from './beer/views/beer-datatable-view/beer-datatable-view.component';
import { BeerDetailComponent } from './beer/components/beer-detail/beer-detail.component';
import { BeerDatatableComponent } from './beer/components/beer-datatable/beer-datatable.component';
import { BeerDashboardComponent } from './beer/components/beer-dashboard/beer-dashboard.component';
import { BeerDashboardCellComponent } from './beer/components/beer-dashboard-cell/beer-dashboard-cell.component';
import { BeerNavigationBarComponent } from './beer/components/beer-navigation-bar/beer-navigation-bar.component';
import { ImageViewComponent } from './common/components/image-view/image-view.component';
import { ImageUploadButtonComponent } from './common/components/image-upload-button/image-upload-button.component';
import { PageHeaderComponent } from './common/components/page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    BeerDashboardViewComponent,
    BeerDetailViewComponent,
    BeerDatatableViewComponent,
    BeerDetailComponent,
    BeerDatatableComponent,
    BeerDashboardComponent,
    BeerDashboardCellComponent,
    BeerNavigationBarComponent,
    ImageViewComponent,
    ImageUploadButtonComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatCheckboxModule,
    MatIconModule,
    MatChipsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
