import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/service/account.service';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form!: FormGroup;
    loading = false;
    submitted = false;
    error?: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
         //   email: ['', Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
        });
    }

     // convenience getter for easy access to form fields
     get f() { return this.form.controls; }

     onSubmit() {
         this.submitted = true;
 
         // reset alerts on submit
         this.alertService.clear();
          // reset alert on submit
        this.error = '';
 
         // stop here if form is invalid
         if (this.form.invalid) {
             return;
         }
         this.f['username'].value;

         this.loading = true;
         this.accountService.login(this.f['username'].value, this.f['password'].value)
             .pipe(first())
             .subscribe({
                
                 next: ((data:any) => {
                    console.log('data',data);
                    if(!data){
                        this.loading = false;
                          this.router.navigate(['/login']);
                    }else{
                        this.router.navigate(['/home']);
                    }
                    //this.loading = false;
                     // get return url from query parameters or default to home page
                    // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

                     //   this.router.navigateByUrl(returnUrl);
                 }),
                 error: (error:any) => {
                    this.error = error;
                    // this.alertService.error(error);
                     this.loading = false;
                 }
             });
     }

}
