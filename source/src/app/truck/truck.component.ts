import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.css']
})
export class TruckComponent implements OnInit {

  constructor(private contactservice: ContactService, private router: Router) { }
  listArray = [];
  original_listArray = [];

ngOnInit() {
    this.contactservice.getTrucks().subscribe(
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
    window.location.href = pdfurl;
  }

}
