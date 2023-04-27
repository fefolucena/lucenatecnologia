import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CurriculumComponent } from './curriculum/curriculum.component';

const routes: Routes = [
    { path: '', component: CurriculumComponent },
    { path: 'curriculum', component: CurriculumComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);