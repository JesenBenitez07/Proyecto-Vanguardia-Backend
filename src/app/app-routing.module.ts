import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { EmpleoComponent } from './component/empleo/empleo.component';
import { ListaEmpleoComponent } from './component/lista-empleo/lista-empleo.component';
const routes: Routes = [
  { path: '', component: ListaEmpleoComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'empleo', component: EmpleoComponent },
  { path: 'edit-empleo/:id', component: EmpleoComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: HomeComponent },
//      { path: 'buscar-trabajo', component: BuscarTrabajoComponent },
//      { path: 'publicar-empleo', component: PublicarEmpleoComponent },
//      { path: 'postulantes', component: PostulantesComponent }
    ]
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
