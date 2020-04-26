import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesticides',
  templateUrl: './pesticides.component.html',
  styleUrls: ['./pesticides.component.css']
})
export class PesticidesComponent implements OnInit {

  public medicines;
  
  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
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
