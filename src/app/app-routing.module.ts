import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { authGuard } from './auth.guard';
import { MovieDetComponent } from './movie-det/movie-det.component';

const routes: Routes = [
{path:'', redirectTo:'home' ,pathMatch:'full'},
{path:'home',canActivate:[authGuard] ,component:HomeComponent },
{path:'movieDet/:id/:type',canActivate:[authGuard] ,component: MovieDetComponent },
{path:'aboutus',canActivate:[authGuard] ,component:AboutUsComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'**',component:NotFoundComponent}   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
