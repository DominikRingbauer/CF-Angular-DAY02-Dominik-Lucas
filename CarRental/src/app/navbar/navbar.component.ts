import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  counter:number = 0;

  donate() {
  	this.counter += 10;
  	console.log(this.counter);
  }

  ngOnInit(): void {
  }

}
