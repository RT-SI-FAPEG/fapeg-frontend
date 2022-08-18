import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.forgetPasswordForm = this.formBuilder.group({
      email: [null, Validators.required]
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    const { email } = this.forgetPasswordForm.value
    console.log(email)
  }

}
