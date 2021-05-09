import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor(private contactservice: ContactService, private router: Router) { }
  listArray = [];
  original_listArray = [];

  ngOnInit() {
    this.contactservice.getEquipment().subscribe(
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
    book => (book.unitno + book.make + book.model + book.year + book.description + book.serialno).toLowerCase().includes(newValue.toLowerCase()));
  }

  public onDownload(pdfurl) {
    window.location.href = pdfurl;
  }

}
