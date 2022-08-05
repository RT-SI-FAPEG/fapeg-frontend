import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.loginForm = this.formBuilder.group({
      user: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const { user, password } = this.loginForm.value;

    console.log({ user, password });

    // this.loginService.auth({ user, password }).subscribe((response) => {
    //   console.log(response);
    // });
  }
}
