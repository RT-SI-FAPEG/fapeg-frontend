import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userForm: FormGroup
  loading: boolean = false
  user?: User

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { 
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      birthDate: [null, Validators.required],
      email: [null, Validators.required],
      document: [null, Validators.required],
      educationLevel: [null],
      educationalInstitution: [null],
      course: [null],
      typePerson: [null, Validators.required],
    })

    this.userService.getUser(localStorage.getItem('userId')!).subscribe(
      (user: User) => {
        this.user = user
        console.log(user)
      }, (err) => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {

  }

  onSubmit() {
    
  }

}
