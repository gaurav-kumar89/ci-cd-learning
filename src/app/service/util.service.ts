import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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


@Injectable({
  providedIn: 'root'
})
export class UtilService {
  customers = CUSTOMERS;

  private activeUserdata = new Subject<any>();
  activeUserdata$ = this.activeUserdata.asObservable();

  private inactiveUserdata = new Subject<any>();
  inactiveUserdata$ = this.inactiveUserdata.asObservable();

  setData(data: any) {
    this.activeUserdata.next(data);
  }

  setInActiveData(data: any){
    this.inactiveUserdata.next(data);
  }

  getData(){
    return this.customers;
  }

  constructor() { }
}
