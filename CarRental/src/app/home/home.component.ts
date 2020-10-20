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
		image:"Audi.jpg",
		color:"red",
		price:5000
	},{
		brand:"BMW",
		type:"M4",
		image:"bmw.jpg",
		color:"blue",
		price:3000
	},{
		brand:"Mercedes",
		type:"Amg-GT",
		image:"mercedes.jpg",
		color:"silver",
		price:12000
	},{
		brand:"Porsche",
		type:"Carrerra GT",
		image:"porsche.png",
		color:"silver",
		price:29000
	}]

  constructor() { }

  addCar(){

    if(this.info.valid){
      var a = this.info.value;
      /*var b = this.info.value.image.substring(12);
      console.log(b);
      a.image.splice(0, 0, b);*/
      console.log(a);
      this.cars.push(a);
      console.log(this.cars);
   }

  }

  ngOnInit(): void {
  }

}
