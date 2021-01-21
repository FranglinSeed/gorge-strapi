import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { first } from 'rxjs/operators';
// import { KaitiekiService } from '../services/kaitieki.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  error = '';
  
  form: FormGroup;

  type: 'login' | 'signup' | 'reset' = 'login';
  loading = false;

  serverMessage: string;

  loginData = {
    email: '',
    password: '',
  };

  constructor( private FB: FormBuilder, private route: ActivatedRoute, private router: Router, private AS:AuthService ) { }

  ngOnInit(): void {

    this.form = this.FB.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [ Validators.minLength(6), Validators.required ]
      ],
      passwordConfirm: [ '', [] ]
    });

  }

  changeType(val) {
    this.type = val;
  }

  get isLogin() {
    return this.type === 'login';
  }

  get isSignup() {
    return this.type === 'signup';
  }

  get isPasswordReset() {
    return this.type === 'reset';
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  get passwordDoesMatch() {
    if (this.type !== 'signup') {
      return true;
    } else {
      return this.password.value === this.passwordConfirm.value;
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  async onSubmit() {
    this.loading = true;

    const email = this.email.value;
    const password = this.password.value;

    this.loginData = {
      email: email,
      password: password,
    };

    try {
      
      if (this.isLogin) {
        // stop here if form is invalid
        if ( this.form.invalid ) {
          alert ( "INVALID" )
            return;
        }

        this.loading = true;
        this.AS.login(email, password)
        .pipe(first())
        .subscribe(
            data => {
              this.router.navigate(['/']);
            },
            error => {
              if (error && error.error && error.error.message && error.error.message.length > 0) {
                alert(error.error.message[0].messages[0].message);
              }
              else 
              {
                alert('error');
              }
              
              //this.alertService.error(error);
              this.loading = false;
            });
      }
      
      if (this.isSignup) {
        // console.log( "SIGNUP - EMAIL: " + email + " PASSWORD: " + password );
      }

      if (this.isPasswordReset) {
        
      }
      
    } catch (err) {
      
    }

    this.loading = false;
  }

  
}
