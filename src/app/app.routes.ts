import { Routes } from '@angular/router';
import { WorkersComponent } from './workers/workers.component';
import { PermissionsRequestsComponent } from './permissions-requests/permissions-requests.component';
import { AdministrationComponent } from './administration/administration.component';

export const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'workers', component: WorkersComponent},
    {path: 'permissionsRequests', component: PermissionsRequestsComponent},
    {path: 'administration', component: AdministrationComponent}
];
