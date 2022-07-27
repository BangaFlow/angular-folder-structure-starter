import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from '@core/guards/no-auth.guard';
import { ContentComponent, LandingPageComponent, NotFoundComponent } from './layout';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'd',
    component: ContentComponent,
    // canActivate: [NoAuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('@modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
