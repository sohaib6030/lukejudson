import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor(private contactservice: ContactService, private router: Router) { }
  listArray = [];
  original_listArray = [];

  ngOnInit() {
    this.contactservice.getVehicles().subscribe(
      list => {
        this.listArray = list.map(item => {
          return {
              $key: item.key,
              ...item.payload.val()
          };
        });

        this.original_listArray = this.listArray;
      });
  }

  public onSearchChange(newValue) {
    this.listArray = this.original_listArray;

    this.listArray = this.listArray.filter(
    book => (book.unitno + book.make + book.model + book.year + book.serialno + book.licenseplate).toLowerCase().includes(newValue.toLowerCase()));
  }

  public onDownload(pdfurl) {
    //const url= window.URL.createObjectURL(blob);
    //window.open("https://firebasestorage.googleapis.com/v0/b/judsonltd-98337.appspot.com/o/ContactPDF%2FCV_1620573794175?alt=media&token=07e90aeb-b1f8-4c17-a287-e6c119b1c962");
    
    window.location.href = pdfurl;

  }

}
