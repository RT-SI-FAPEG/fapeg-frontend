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
        this.updateUserForm(user)
      }, (err) => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void { }

  onSubmit() {
    const {
      name,
      birthDate,
      email,
      document,
      educationLevel,
      educationalInstitution,
      course,
      typePerson
    } = this.userForm.value

    this.loading = true
    this.userService.updateUser({
      id: this.user!.id!, name, birthDate, email, document, educationLevel, educationalInstitution, course, typePerson
    }).subscribe(
      (updateUser) => {
        this.loading = false
        alert('Usuário atualizado com sucesso.')
      },
      (err) => {
        this.loading = false
        console.log(err)
        if(err.error) {
          alert(err.error.error)
        }
      }
    )
  }

  updateUserForm(user: User) {
    this.userForm.patchValue({ name: user.name })
    this.userForm.patchValue({ birthDate: user.birthDate })
    this.userForm.patchValue({ email: user.email })
    this.userForm.patchValue({ document: user.document })
    this.userForm.patchValue({ educationLevel: user.educationLevel })
    this.userForm.patchValue({ educationalInstitution: user.educationalInstitution })
    this.userForm.patchValue({ course: user.course })
    this.userForm.patchValue({ typePerson: user.typePerson })
  }

  deleteAccount() {
    const result = prompt('ATENÇÃO! Essa ação NÃO pode ser desfeita. Digite EXCLUIR para confirmar a exclusão da conta.')
    if (result && result.toLowerCase() == 'excluir') {
      this.userService.deleteUser(this.user!.id!).subscribe(
        () => {
          alert('Conta excluída com sucesso.')
          localStorage.removeItem('token')
          localStorage.removeItem('userId')
          window.location.reload()
        },
        (err) => {
          alert('Não foi possível deletar o usuário no momento. Por favor, tente novamente mais tarde')
          console.error(err)
        }
      )
    }
  }
}
