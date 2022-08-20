import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  makingRegister: boolean = true
  passwordConfirmation: string = ''
  loading: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.registerForm = this.formBuilder.group({
      name: [null, Validators.required],
      birthDate: [null, Validators.required],
      email: [null, Validators.required],
      document: [null, Validators.required],
      password: [null, Validators.required],
      educationLevel: [null],
      educationalInstitution: [null],
      course: [null],
      typePerson: [null, Validators.required],
      passwordConfirmation: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const { 
      name,
      email,
      password,
      passwordConfirmation,
      document,
      birthDate,
      interestArea,
      typePerson,
      educationLevel,
      course,
      educationalInstitution
    } = this.registerForm.value

    if(password !== passwordConfirmation) {
      alert('As senhas não coincidem.')
      return
    }
    this.loading = true
    this.userService.createUser({ name, email, password, document, birthDate, interestArea, typePerson, educationLevel, course, educationalInstitution})
      .subscribe(
        () => {
          this.loading = false
          this.makingRegister = false
        },
        (err) => {
          console.log(err)
          if(err.error) {
            alert(err.error.error)
          }
          this.loading = false
        }
      )
  }

}
