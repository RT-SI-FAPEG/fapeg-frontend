import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  userForm: FormGroup
  loading = false

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      subject: [null, Validators.required],
      message: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userForm.value)
  }

}
