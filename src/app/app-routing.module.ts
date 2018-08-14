import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuctionDetailsComponent } from './auction-details/auction-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auction-details', component: AuctionDetailsComponent }

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}