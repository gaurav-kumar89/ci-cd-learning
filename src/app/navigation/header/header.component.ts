import { Component ,OnDestroy, OnInit} from '@angular/core';
import { UtilService } from 'src/app/service/util.service';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy, OnInit {
  activeUserdata: string  = '';
  subscription: Subscription;
  inActSubscription: Subscription;

  inActiveuserdata: string = '';

  constructor(public util:UtilService, public accountService:AccountService) {
    this.subscription = this.util.activeUserdata$.subscribe((data:any) =>{
      this.activeUserdata = data;
      console.log('daat', data)
     })

     this.inActSubscription = this.util.inactiveUserdata$.subscribe((data:any)=>{
      this.inActiveuserdata = data;
      console.log('inactive',data);
     })
  }

  result:any;
  activeUser:any;
  inactiveUser:any;
  logedUser:any;
  ngOnInit(): void {
    this.result = this.util.getData();
    console.log('result',this.result);

    this.activeUser = this.result.filter((num:any) => num.status === 1);
    this.activeUserdata = this.activeUser.length;

    this.inactiveUser = this.result.filter((num:any) => num.status === 0);
    this.inActiveuserdata = this.inactiveUser.length;
    this.logedUser = this.accountService.userValue;
    console.log('activeUser',this.activeUser.length);
    this.userInfo();
  }

  userInfo() {
    let userinfo = this.accountService.getDecodedAccessToken(this.accountService.userValue);
    console.log('userinfo',userinfo.result)
    return userinfo;
  }

  logout(){
    this.accountService.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.inActSubscription.unsubscribe();
  }
 
}
