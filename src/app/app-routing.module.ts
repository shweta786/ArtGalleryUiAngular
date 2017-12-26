import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexLayoutComponent } from './index-layout/index-layout.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
    { path: '', component: IndexLayoutComponent ,
        children: [
            // { path: 'footer', component: FooterComponent  },
            { path: '', component: HomeComponent },
        ]
    },
    // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
