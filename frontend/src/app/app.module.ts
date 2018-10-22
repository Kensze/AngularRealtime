import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListHomesComponent } from './homes/list-homes.component';
import { HomeService } from './homes/home.service';



import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListHomeComponent } from './list-home/list-home.component';

const appRoutes: Routes = [
  { path: 'list', component: ListHomesComponent },
  { path: 'homes/:id/data', component: ListHomeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListHomesComponent,
    ListHomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabled'}),
    HttpClientModule,
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
