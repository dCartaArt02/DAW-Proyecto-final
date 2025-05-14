import { Routes } from '@angular/router';
import { AhuchapanComponent } from './departamentos/ahuchapan/ahuchapan.component';
import { CabanasComponent } from './departamentos/cabanas/cabanas.component';
import { ChalatenangoComponent } from './departamentos/chalatenango/chalatenango.component';
import { CuscatlanComponent } from './departamentos/cuscatlan/cuscatlan.component';
import { LalibertadComponent } from './departamentos/lalibertad/lalibertad.component';
import { LapazComponent } from './departamentos/lapaz/lapaz.component'
import { MorazanComponent } from './departamentos/morazan/morazan.component';
import { SanmiguelComponent } from './departamentos/sanmiguel/sanmiguel.component'
import { SansalvadorComponent } from './departamentos/sansalvador/sansalvador.component';
import { SantaanaComponent } from './departamentos/santaana/santaana.component';
import { SanvicenteComponent } from './departamentos/sanvicente/sanvicente.component';
import { SonsonateComponent } from './departamentos/sonsonate/sonsonate.component';
import { UnionComponent } from './departamentos/union/union.component';
import { UsulutanComponent } from './departamentos/usulutan/usulutan.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    {path: 'departamento/ahuachapan', component: AhuchapanComponent},
    {path: 'departamento/cabanas', component: CabanasComponent},
    {path: 'departamento/chalatenango', component: ChalatenangoComponent},
    {path: 'departamento/cuscatlan', component: CuscatlanComponent},
    {path: 'departamento/la-libertad', component: LalibertadComponent},
    {path: 'departamento/la-paz', component: LapazComponent},
    {path: 'departamento/morazan', component: MorazanComponent},
    {path: 'departamento/san-miguel', component: SanmiguelComponent},
    {path: 'departamento/san-salvador', component: SansalvadorComponent},
    {path: 'departamento/santa-ana', component: SantaanaComponent},
    {path: 'departamento/san-vicente', component: SanvicenteComponent},
    {path: 'departamento/sonsonate', component: SonsonateComponent},
    {path: 'departamento/la-union', component: UnionComponent},
    {path: 'departamento/usulutan', component: UsulutanComponent},
    {path: 'contacto', component: ContactoComponent},
];

