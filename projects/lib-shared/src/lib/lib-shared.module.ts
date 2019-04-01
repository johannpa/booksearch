import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LibSharedComponent } from './lib-shared.component';

import { AppRoutingModule } from './adz-routing.module';
import { AppComponent } from './adz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatMenuModule,
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { SearchBookComponent } from './search-book/search-book.component';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'research', component: ResearchComponent }];

@NgModule({
  declarations: [LibSharedComponent, AppComponent, MainNavComponent, HomeComponent, ResearchComponent, SearchBookComponent],
  imports: [
     BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    MatGridListModule,
    MatMenuModule,
  ],
  exports: [LibSharedComponent]
})
export class LibSharedModule { }
