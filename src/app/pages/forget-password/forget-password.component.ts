import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  token!: string
  forgetPasswordForm: FormGroup
  changePasswordForm: FormGroup
  loading = false
  emailReceived = false 

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    this.forgetPasswordForm = this.formBuilder.group({
      email: [null, Validators.required]
    })

    this.changePasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    })

    this.activedRoute.params.subscribe(params => this.token = params['token'])
   }

  ngOnInit(): void {
    if(this.token) {
      this.emailReceived = true
    }
  }

  onSubmit() {
    const { email } = this.forgetPasswordForm.value
    this.loading = true
    this.userService.sendEmailtoChangePassword(email).subscribe(
      (response) => {
        this.loading = false
        alert('Foi enviado um e-mail para recuperação da senha.')
      },
      (err) => {
        if(err.error) {
          alert(err.error)
        }
        this.loading = false 
        console.log(err)
      }
    )
  }

  changePassword() {
    const { password, passwordConfirmation } = this.changePasswordForm.value

    if(password !== passwordConfirmation) {
      alert('As senhas não coincidem.')
      return
    }

    this.loading = true
    this.userService.updatePassword(password, this.token).subscribe(
      (response) => {
        alert('Senha alterada com sucesso.')
        this.router.navigate(['/login'])
      },
      (err) => {
        if(err.error) {
          alert(err.error)
        }
        this.loading = false 
        console.log(err)
      }
    )
  }
}
