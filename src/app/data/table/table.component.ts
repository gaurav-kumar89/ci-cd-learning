import { Component,OnInit,EventEmitter,Output } from '@angular/core';
import { Observable, from } from 'rxjs';
import { UtilService } from 'src/app/service/util.service';

interface Customer {
	cus_name: string;
	cus_id: number;
	status: any;
} 

const CUSTOMERS: Customer[] = [
	{
		cus_name: 'Gaurav',
		cus_id: 1,
		status: 0
	},
	{
		cus_name: 'Anil',
		cus_id: 2,
		status: 1
	},
	{
		cus_name: 'Parveen',
		cus_id: 3,
		status: 0
	},{
		cus_name: 'Sandy',
		cus_id: 4,
		status: 1
	},{
		cus_name: 'Tarun',
		cus_id: 5,
		status: 0
	},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  customers = CUSTOMERS;
  @Output() public newPrice = new EventEmitter<any>();

  constructor(public ulil: UtilService) {
  }
  
  ngOnInit(): void {
    console.log('customers ', this.customers);
  }

  total_active:any = 0;
  total_inactive:any = 0;
  setStatus(event:any) {
    if(event){
      const source = '';
      console.log('event', event)
      if(event.status === 1){
        //The findIndex() method executes a function for each array element.
        var foundIndex = this.customers.findIndex(x => x.cus_id == event.cus_id);
        this.customers[foundIndex].status = 0;
        this.total_active = this.customers.filter((num:any) => num.status === 1); 

        alert('Current staus is <b>Active</b> and we going to call api for changing status');
        console.log('this.total_active.length',this.total_active.length);      
        this.ulil.setData(this.total_active.length);

        this.total_inactive = this.customers.filter((num:any) => num.status === 0); 
        this.ulil.setInActiveData(this.total_inactive.length);

      }else{

        var foundIndex = this.customers.findIndex(x => x.cus_id == event.cus_id);
        this.customers[foundIndex].status = 1;
        this.total_inactive = this.customers.filter((num:any) => num.status === 0); 
        alert('Current staus is InActive and we going to call api for changing status');
        console.log('this.total_inactive.length',this.total_inactive.length);      
        this.ulil.setInActiveData(this.total_inactive.length);

        this.total_active = this.customers.filter((num:any) => num.status === 1); 
        this.ulil.setData(this.total_active.length);

      }
    }
  }
}
