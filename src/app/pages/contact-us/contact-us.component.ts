import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  userForm: FormGroup
  loading = false

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private loginService: LoginService
  ) {
    this.userForm = this.formBuilder.group({
      subject: [null, Validators.required],
      message: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const { subject, message } = this.userForm.value
    this.loading = true
    this.userService.contactUs({ subject, text: message, email: this.loginService.userEmail! }).subscribe(
      (response) => {
        this.loading = false 
        alert("Mensagem enviada com sucesso!")
        this.userForm.reset()
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
