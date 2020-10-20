import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	cars = [{
		brand:"Audi",
		type:"A8",
		image:"/assets/Audi.jpg",
		color:"red",
		price:5000
	},{
		brand:"BMW",
		type:"M4",
		image:"/assets/bmw.jpg",
		color:"blue",
		price:3000
	},{
		brand:"Mercedes",
		type:"Amg-GT",
		image:"/assets/mercedes.jpg",
		color:"silver",
		price:12000
	},{
		brand:"Porsche",
		type:"Carrerra GT",
		image:"/assets/porsche.png",
		color:"silver",
		price:29000
	}]

  constructor() { }

  

  ngOnInit(): void {
  }

}
