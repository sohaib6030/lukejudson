import { Injectable } from '@angular/core';
import { AngularFireList,  AngularFireDatabase } from 'angularfire2/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
//import { ExecOptions } from 'child_process';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private firebase: AngularFireDatabase, private router: Router) { }

  contactlist: AngularFireList<any>;  
  vehiclelist: AngularFireList<any>;  
  trucklist: AngularFireList<any>;  
  equiepmentlist: AngularFireList<any>;  
  trailerlist: AngularFireList<any>;  

  getContacts()
  {
    this.contactlist = this.firebase.list('contacts');
    return this.contactlist.snapshotChanges();
  }

  getVehicles()
  {
    this.vehiclelist = this.firebase.list('vehicles');
    return this.vehiclelist.snapshotChanges();
  }

  getTrucks()
  {
    this.trucklist = this.firebase.list('trucks');
    return this.trucklist.snapshotChanges();
  }

  getEquipment()
  {
    this.equiepmentlist = this.firebase.list('equipments');
    return this.equiepmentlist.snapshotChanges();
  }

  getTrailer()
  {
    this.trailerlist = this.firebase.list('trailers');
    return this.trailerlist.snapshotChanges();
  }

}
