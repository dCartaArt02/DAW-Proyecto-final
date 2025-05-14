import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CuscatlanComponent } from './app/departamentos/cuscatlan/cuscatlan.component';
import { provideRouter, Routes } from '@angular/router';
import { CabanasComponent } from './app/departamentos/cabanas/cabanas.component';
import { ChalatenangoComponent } from './app/departamentos/chalatenango/chalatenango.component';
import { AhuchapanComponent } from './app/departamentos/ahuchapan/ahuchapan.component';
import { LalibertadComponent } from './app/departamentos/lalibertad/lalibertad.component';
import { LapazComponent } from './app/departamentos/lapaz/lapaz.component';
import { MorazanComponent } from './app/departamentos/morazan/morazan.component';
import { SanmiguelComponent } from './app/departamentos/sanmiguel/sanmiguel.component';
import { SansalvadorComponent } from './app/departamentos/sansalvador/sansalvador.component';
import { SantaanaComponent } from './app/departamentos/santaana/santaana.component';
import { SanvicenteComponent } from './app/departamentos/sanvicente/sanvicente.component';
import { SonsonateComponent } from './app/departamentos/sonsonate/sonsonate.component';
import { UnionComponent } from './app/departamentos/union/union.component';
import { UsulutanComponent } from './app/departamentos/usulutan/usulutan.component';

const routes: Routes = [
    {path: 'cus', component: CuscatlanComponent},
    {path: 'caba', component: CabanasComponent},
    {path: 'cha', component: ChalatenangoComponent},
    {path: 'ahu', component: AhuchapanComponent},
    {path: 'lal', component: LalibertadComponent},
    {path: 'lap', component: LapazComponent},
    {path: 'mor', component: MorazanComponent},
    {path: 'san', component: SanmiguelComponent},
    {path: 'sas', component: SansalvadorComponent},
    {path: 'sat', component: SantaanaComponent},
    {path: 'sav', component: SanvicenteComponent},
    {path: 'son', component: SonsonateComponent},
    {path: 'uni', component: UnionComponent},
    {path: 'usu', component: UsulutanComponent},
  ];

  
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
