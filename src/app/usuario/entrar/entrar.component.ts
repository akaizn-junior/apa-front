import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// local
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {
  error: boolean = false;
  errorMsg: string;

  constructor(private http: HttpClient,
      private auth: AuthService,
      private router: Router)
    { }

  ngOnInit() {
  }

  entrar(form: NgForm) {
    //this check is done on the html - but for sanity check...
    if(!form.valid) { return; }

    const body = {
      email: form.value.user,
      password: form.value.pass,
      remember: form.value.lembra
    };

    return this.auth
    .entrar(body, () => {
      //go home
      this.router.navigate(['']);
    }, (err, msg) => {
      this.error = err;
      this.errorMsg = msg;
    });
  }
}
