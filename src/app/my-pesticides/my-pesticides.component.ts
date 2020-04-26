import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-pesticides',
  templateUrl: './my-pesticides.component.html',
  styleUrls: ['./my-pesticides.component.css']
})
export class MyPesticidesComponent implements OnInit {

  public medicines;
  constructor(
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    //alert("This is my-medicine");
    console.log(this.apiService.getMedicines().subscribe(res => {
      //console.log(res);
      this.medicines = res;
      console.log(this.medicines[0]);
    },
    console.error
  ))
  }

  navigateToOrder($event, medicineId) {
    //alert(medicineId.$oid);
   
    this.router.navigate(['/pesticides/'+medicineId.$oid]);
  }

}
