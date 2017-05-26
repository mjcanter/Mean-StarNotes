import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'show/:_id', component: ShowComponent },
    { path: 'new', component: NewComponent },
    { path: 'edit/:_id', component: EditComponent },
    { path: 'delete/:_id', component: DeleteComponent },
];
export const routing = RouterModule.forRoot(APP_ROUTES);