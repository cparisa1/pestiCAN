import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../services/api.service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';


@Component({
  selector: 'app-pesticides-info',
  templateUrl: './pesticides-info.component.html',
  styleUrls: ['./pesticides-info.component.css']
})
export class PesticidesInfoComponent implements OnInit {

  public medicineId:any;
  public medicineDetails;
  KEY = 'CART';
  value: any = null;
  cartItems = [];
  //arr_names = new Array(4);
  cartItem:any;
  cartIte :any = [];
  selectedNumber:number = 1;

public pesticides = [
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

  constructor(private route: ActivatedRoute,
    private apiService: ApiService,
    public local: LocalStorageService, public session: SessionStorageService,
    private router: Router) { }

  ngOnInit() {
    this.cartItem = [];
    this.route.paramMap.subscribe(params => {
      this.medicineId = params.get("id")
    })
    this.medicineDetails=this.pesticides.find(x=>x._id['$oid'] == this.medicineId);
    this.apiService.apiPesticide(this.medicineId).subscribe(res =>{
      console.log(res);
      this.medicineDetails=res;
      //this.cartItems.push(this.medicineDetails);
      this.onRowClick();
    })
    this.onRowClick();
  }

  onRowClick(){
    //alert(this.selectedNumber);
    this.medicineDetails.quantityItem = this.selectedNumber;
    this.medicineDetails.total_price = this.selectedNumber * this.medicineDetails.price;
    console.log(this.medicineDetails);
  }
  
  addToCart() {
    //let cartItem = [];
    ///this.cartItems.push(this.medicineDetails);
    if(this.local.get(this.KEY) !=null){
      //this.cartItem.push(this.local.get(this.KEY));
      //this.heroes.push(this.cartItem);
      this.local.get(this.KEY).forEach(element => {
        this.cartIte.push(element);
      });
      //this.cartIte=this.cartItem;
      this.cartIte.push(this.medicineDetails);
      this.local.set(this.KEY, this.cartIte);
    }
   else{
    if (typeof this.cartIte !== 'undefined')
    this.cartIte.push(this.medicineDetails);
    this.local.set(this.KEY, this.cartIte);
   }
   this.router.navigate(['/cart']);
  }

}
