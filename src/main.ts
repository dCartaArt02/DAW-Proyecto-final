import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CuscatlanComponent } from './app/departamentos/cuscatlan/cuscatlan.component';
import { provideRouter, Routes } from '@angular/router';

  const routes: Routes = [
    {path: 'cus', component: CuscatlanComponent},
    
  ];

  
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));

