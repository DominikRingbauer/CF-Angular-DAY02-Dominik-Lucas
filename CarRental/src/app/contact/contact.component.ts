import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	info = new FormGroup({
	   firstName: new FormControl(''),
	   lastName: new FormControl(''),
	   age: new FormControl(''),
	   email:new FormControl(''),
	   text:new FormControl(''),
	});

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

      var a = this.info.value;
      console.log(a);
  }

}
