import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GeolocationService } from './geolocation.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatSlideToggleModule, MatIconModule, MatInputModule,
  MatSelectModule, MatSliderModule, MatToolbarModule, MatSnackBarModule,
  MatAutocompleteModule,
  // MatButtonModule,
  MatButtonToggleModule,
  // MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatCommonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  // MatIconModule,
  // MatInputModule,
  MatLineModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatPseudoCheckboxModule,
  MatRadioModule,
  MatRippleModule,
  // MatSelectModule,
  MatSidenavModule,
  // MatSliderModule,
  // MatSlideToggleModule,
  // MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  // MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
// import { ListComponent } from './list/list.component';
// import { CreateVehicleComponent } from './createvehicle/createvehicle.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TrailerComponent } from './trailer/trailer.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { CreateVehicleComponent } from './createvehicle/createvehicle.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { CreatetrailerComponent } from './createtrailer/createtrailer.component';
import { CreateequipmentComponent } from './createequipment/createequipment.component';
import { TruckComponent } from './truck/truck.component';
import { CreatetruckComponent } from './createtruck/createtruck.component';
import { ContactService } from './shared/contact.service';


const routes: Routes = [
  { path: '', component: VehicleComponent },
  { path: 'Createvehicle', component: CreateVehicleComponent },
  { path: 'CreateVehicle/:id', component: CreateVehicleComponent },
  { path: 'Createcontact', component: CreatecontactComponent },
  { path: 'Createcontact/:id', component: CreatecontactComponent },
  { path: 'Createtrailer', component: CreatetrailerComponent },
  { path: 'Createtariler/:id', component: CreatetrailerComponent },
  { path: 'Createequipment', component: CreateequipmentComponent },
  { path: 'Createequipment/:id', component: CreateequipmentComponent },
  { path: 'Createtruck', component: CreatetruckComponent },
  { path: 'Createtruck/:id', component: CreatetruckComponent },
  { path: 'VehicleComponent', component: VehicleComponent },
  { path: 'TrailerComponent', component: TrailerComponent },
  { path: 'ContactsComponent', component: ContactsComponent },
  { path: 'EquipmentComponent', component: EquipmentComponent },
  { path: 'TruckComponent', component: TruckComponent },

  
  // {path: '', component: FooterComponent }

];


export const firebaseConfig = {
  apiKey: "AIzaSyBf1euiqYMiGcAWkQhH2b7gXJRm46e4Igs",
  authDomain: "judsonltd-98337.firebaseapp.com",
  databaseURL: "https://judsonltd-98337-default-rtdb.firebaseio.com",
  projectId: "judsonltd-98337",
  storageBucket: "judsonltd-98337.appspot.com",
  messagingSenderId: "740723481172",
  appId: "1:740723481172:web:9be172115b09859c5eabc1",
  measurementId: "G-74E3PB6GGQ"
};

@NgModule({


  declarations: [
    AppComponent,
    // ListComponent,
    FooterComponent,
    HeaderComponent,
    VehicleComponent,
    ContactsComponent,
    TrailerComponent,
    EquipmentComponent,
    CreateVehicleComponent,
    CreateequipmentComponent,
    CreatecontactComponent,
    CreatetrailerComponent,
    TruckComponent,
    CreatetruckComponent ,

  ],
  imports: [
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule, HttpClientModule, MatSnackBarModule,
    RouterModule.forRoot(routes, { useHash: false }),
    BrowserModule, MatButtonModule, MatCardModule, MatSlideToggleModule, MatIconModule, MatInputModule,
    MatSelectModule, MatSliderModule, MatToolbarModule, BrowserAnimationsModule,
    BrowserModule, FormsModule, MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatLineModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatPseudoCheckboxModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule, AngularFireDatabaseModule, ReactiveFormsModule
  ],
  providers: [GeolocationService, DataService, ContactService],
  bootstrap: [AppComponent],
})
export class AppModule { }
