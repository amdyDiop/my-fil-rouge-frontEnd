import {Component, OnInit} from '@angular/core';
import {ConnexionService} from './connexion.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  myForm: FormGroup;
  token: any;

  constructor(public connexionSrv: ConnexionService, builder: FormBuilder) {
    this.myForm = builder.group({
      login: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    // console.log('you submitted value: ', this.myForm.value);
    this.connexionSrv.getToken(this.myForm.value.login, this.myForm.value.password);
    this.token = this.connexionSrv.findToken();
    this.connexionSrv.redirectByRole(this.token.roles[0]);
  }
}
