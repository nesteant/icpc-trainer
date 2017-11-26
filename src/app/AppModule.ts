import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './AppComponent';
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
import {icpcReducer} from './reducers/IcpcReducer';
import {IcpcService} from './services/IcpcService';
import {SharedModule} from './SharedModule';
import {PatientResolver} from './services/PatientResolver';
import {IcpcDialogsModule} from './dialogs/IcpcDialogsModule';
import {PageNotFoundComponent} from './pages/page-not-found/PageNotFoundComponent';
import {NoContentComponent} from './pages/no-content/NoContentComponent';
import {DateAdapter, MAT_DATE_LOCALE} from '@angular/material';
import {AppDateAdapter} from './services/AppDateAdapter';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NoContentComponent,
    PatientDetailsPageComponent,
  ],
  exports: [
    SharedModule,
  ],
  imports: [
    SharedModule,
    IcpcDialogsModule,
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
        component: PatientsPageComponent,
        resolve: {
          patients: PatientResolver
        },
        children: [{
          path: ':id',
          component: PatientDetailsPageComponent,
          resolve: {
            patients: PatientResolver
          }
        },
          {path: '**', component: NoContentComponent}
        ]
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
    {provide: MAT_DATE_LOCALE, useValue: 'en-US'},
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: LOCALE_ID, useValue: 'en-US'},
    PatientsService,
    IcpcService,
    PatientResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
