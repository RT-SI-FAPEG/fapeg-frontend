import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  legalPersonForm: FormGroup
  physicalPersonForm: FormGroup
  makingRegister: boolean = true

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.legalPersonForm = this.formBuilder.group({

    })

    this.physicalPersonForm = this.formBuilder.group({
      
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.makingRegister = false
  }

}
