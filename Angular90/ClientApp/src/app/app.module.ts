import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppealListComponent } from './appeal/appeal-list.component';
import { AppealComponent } from './appeal/appeal.component';
import { AppealEditComponent } from './appeal/appeal-edit.component';
import { CocListComponent } from './coc/coc-list.component';
import { CocComponent } from './coc/coc.component';
import { CocEditComponent } from './coc/coc-edit.component';
import { GrievanceListComponent } from './grievance/grievance-list.component';
import { GrievanceComponent } from './grievance/grievance.component';
import { GrievanceEditComponent } from './grievance/grievance-edit.component';
import { OonListComponent } from './oon/oon-list.component';
import { OonComponent } from './oon/oon.component';
import { OonEditComponent } from './oon/oon-edit.component';
import { PcpaListComponent } from './pcpa/pcpa-list.component';
import { PcpaComponent } from './pcpa/pcpa.component';
import { PcpaEditComponent } from './pcpa/pcpa-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AppealListComponent,
    AppealComponent,
    AppealEditComponent,
    CocListComponent,
    CocComponent,
    CocEditComponent,
    GrievanceListComponent,
    GrievanceComponent,
    GrievanceEditComponent,
    OonListComponent,
    OonComponent,
    OonEditComponent,
    PcpaListComponent,
    PcpaComponent,
    PcpaEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'appeal', component: AppealListComponent },
      { path: 'appeal/create', component: AppealEditComponent },
      { path: 'appeal/:id', component: AppealComponent },
      { path: 'appeal/edit/:id', component: AppealEditComponent },
      { path: 'coc', component: CocListComponent },
      { path: 'coc/create', component: CocEditComponent },
      { path: 'coc/:id', component: CocComponent },
      { path: 'coc/edit/:id', component: CocEditComponent },
      { path: 'grievance', component: GrievanceListComponent },
      { path: 'grievance/create', component: GrievanceEditComponent },
      { path: 'grievance/:id', component: GrievanceComponent },
      { path: 'grievance/edit/:id', component: GrievanceEditComponent },
      { path: 'oon', component: OonListComponent },
      { path: 'oon/create', component: OonEditComponent },
      { path: 'oon/:id', component: OonComponent },
      { path: 'oon/edit/:id', component: OonEditComponent },
      { path: 'pcpa', component: PcpaListComponent },
      { path: 'pcpa/create', component: PcpaEditComponent },
      { path: 'pcpa/:id', component: PcpaComponent },
      { path: 'pcpa/edit/:id', component: PcpaEditComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
