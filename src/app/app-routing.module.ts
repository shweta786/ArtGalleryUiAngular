import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexLayoutComponent } from './index-layout/index-layout.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { ArtistComponent } from './artist/artist.component';
import { AllArtistComponent } from './all-artist/all-artist.component';

const routes: Routes = [
    { path: '', component: IndexLayoutComponent ,
        children: [
            // { path: 'footer', component: FooterComponent  },
            { path: '', component: HomeComponent },
        ]
    },
    { path: 'logout', component: LogoutComponent },
    { path: 'artist', component: ArtistComponent  },
    { path: 'allArtist', component: AllArtistComponent },
    // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: '**', redirectTo: 'IndexLayoutComponent' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
