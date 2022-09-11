import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  token: string = ''

  loading: boolean = false;
  showPassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private userService: UserService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
    this.activedRoute.params.subscribe(params => this.token = params['token'])
  }

  ngOnInit(): void {
    if(this.token) {
      this.userService.activeUser(this.token).subscribe(
        () => {
          alert('Conta ativada com sucesso. Faça login para acessar a plataforma.')
        }, 
        (err) => {
          if(err.error) {
            alert(err.error.error)
          }
          console.log(err)
        }
      )
    }
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;

    this.loading = true;
    this.loginService.auth({ email, password }).subscribe(
      (response) => {
        console.log(response);
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.log(err)
        if(err.error) {
          alert(err.error.error)
        }
        this.loading = false;
      }
    );
  }

  passwordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
