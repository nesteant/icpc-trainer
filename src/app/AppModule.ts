import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './AppComponent';
import {PageNotFoundComponent} from './components/page-not-found/PageNotFoundComponent';
import {PatientsService} from './services/PatientsService';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {PatientDetailsModule} from './components/patient-details/PatientDetailsModule';
import {StoreModule} from '@ngrx/store';
import {patientsReducer} from './reducers/PatientsReducer';
import {patientReducer} from './reducers/PatientReducer';
import {RouterModule} from '@angular/router';
import {PatientDetailsPageComponent} from './pages/details/PatientDetailsPageComponent';
import {PatientsModule} from './pages/patients/PatientsModule';
import {PatientsPageComponent} from './pages/patients/PatientsPageComponent';
import {MdDialogModule, MdNativeDateModule} from '@angular/material';
import {CreateVisitDialogModule} from './components/create-visit-dialog/CreateVisitDialogModule';
import {icpcReducer} from './reducers/IcpcReducer';
import {IcpcService} from './services/IcpcService';
import {SharedModule} from './SharedModule';
import {CreateEpisodeDialogModule} from './components/create-episode-dialog/CreateEpisodeDialogModule';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PatientDetailsPageComponent
  ],
  exports: [
    SharedModule
  ],
  imports: [
    SharedModule,
    CreateVisitDialogModule,
    CreateEpisodeDialogModule,
    MdNativeDateModule,
    MdDialogModule,
    BrowserModule,
    NoopAnimationsModule,
    PatientsModule,
    HttpClientModule,
    PatientDetailsModule,
    StoreModule.provideStore({
      patients: patientsReducer,
      patient: patientReducer,
      icpc: icpcReducer
    }),
    RouterModule.forRoot([
      {
        path: 'patients',
        component: PatientsPageComponent
      },
      {
        path: 'patients/:id',
        component: PatientDetailsPageComponent,
      },
      {
        path: '',
        redirectTo: '/patients',
        pathMatch: 'full'
      },
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en-US'},
    PatientsService,
    IcpcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}