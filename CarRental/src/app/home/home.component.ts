import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	info = new FormGroup({
	   image: new FormControl('',Validators.required),
	   brand: new FormControl('',Validators.required),
	   type: new FormControl('',Validators.required),
	   color:new FormControl('',Validators.required),
	   price:new FormControl('',Validators.required),
	});

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

  addCar(){

    if(this.info.valid){
      var a = this.info.value;
      this.cars.push(a);
      console.log(this.cars);
   }

  }

  ngOnInit(): void {
  }

}
