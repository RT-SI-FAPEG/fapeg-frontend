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

  loading: boolean = false
  showPassword: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const { email, password } = this.loginForm.value;

    console.log({ email, password });

    this.loading = true
    this.loginService.auth({ email, password }).subscribe(
      (response) => {
        console.log(response)
        this.loading = false
      },
      (err) => {
        console.log(err)
        this.loading = false
      }
    );
  }

  passwordVisibility() {
    this.showPassword = !this.showPassword
  }
}
