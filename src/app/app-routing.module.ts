import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {AdminComponent} from './admin/admin.component';
import {FormateurComponent} from './formateur/formateur.component';
import {CmComponent} from './cm/cm.component';
import {ApprenantComponent} from './apprenant/apprenant.component';

const routes: Routes = [
  {path: '', component: ConnexionComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'formateur', component: FormateurComponent},
  {path: 'cm', component: CmComponent},
  {path: 'apprenant', component: ApprenantComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
