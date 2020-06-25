import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-pesticides',
  templateUrl: './my-pesticides.component.html',
  styleUrls: ['./my-pesticides.component.css']
})
export class MyPesticidesComponent implements OnInit {

  public pesticides;

  public response = [
    {
      "_id": {
          "$oid": "5c7c2ed4e7179a3e36e08250"
      },
      "name": "Bindie",
      "image": "bindie.png",
      "quantity": "100mg",
      "price": "10",
      "desc": [
          "Controls Bindii",
          "Catsear",
          "Clover",
          "Creeping Oxalis",
          "Cudweed",
          "Dandelion",
          "Plantain",
          "Systemic Herbicides"
      ]
  },
  {
    "_id": {
        "$oid": "5c7c426dbde20d0d4c4a04d7"
    },
    "name": "Camaleon",
    "image": "camaleon.jpg",
    "quantity": "150mg",
    "price": "10",
    "desc": [
        "Camaleon can be used to control farmland",
        "Orchards",
        "Flower Nursery",
        "Grassland and non-arable land",
        "Warehouses and other weeds",
        "Miscellaneous irrigation",
        "Zashu and other harmful plants"
    ]
},
{
  "_id": {
      "$oid": "5c7c4310bde20d1bf4536d83"
  },
  "name": "Chapin",
  "image": "chapin.jpeg",
  "quantity": "50mg",
  "price": "10",
  "desc": [
      "Sprayers rivaling commercial sprayers",
      "Patented relief valve",
      "Translucent Bottle ",
      "Nozzle sprays cone",
      "wand for no-bend spray",
      "built-in splash guard to protect against spillage",
      "spray pattern",
      "extended pump"
  ]
},
{
  "_id": {
      "$oid": "5cacef3fe7179a36ac336993"
  },
  "name": "Cypermethrin",
  "image": "cypermethrin.jpg",
  "quantity": "500mg",
  "price": "10",
  "desc": [
      "Each tablet contains 500mg Paracetamol PhEur.",
      "Can be used to treat following",
      "Fever and Chills"
  ]
},
{
  "_id": {
      "$oid": "5cacf299e7179a36ac336b48"
  },
  "name": "Deltamethrin",
  "image": "deltamethrin.jpg",
  "quantity": "300mg",
  "price": "10",
  "desc": [
      "Each tablet contains",
      "Acetaminophen  (300mg)",
      "Propylphenazone \u2013 (150mg)",
      "Caffeine \u2013 (50mg)",
      "Can be used to treat following",
      "Headache"
  ]
},
{
  "_id": {
      "$oid": "5cacf382e7179a36ac336bcd"
  },
  "name": "Dichlorvos",
  "image": "Dichlorvos.jpg",
  "quantity": "10mg",
  "price": "10",
  "desc": [
      "Each tablet contains Cetirizine hydrochloride",
      "Can be used to treat following",
      "hay fever",
      "dust or pet allergies",
      "Relief of swelling, redness and itchiness of the skin"
  ]
}
  ];

  constructor(
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    //alert("This is my-medicine");
    this.pesticides = this.response;
    console.log(this.apiService.getPesticides().subscribe(res => {
      //console.log(res);
      this.pesticides = res;
      console.log(this.pesticides[0]);
    },
    console.error
  ))
  }

  navigateToOrder($event, pesticideId) {
    //alert(medicineId.$oid);
   
    this.router.navigate(['/pesticides/'+ pesticideId.$oid]);
  }

}
