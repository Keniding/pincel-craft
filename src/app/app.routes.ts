import { Routes } from '@angular/router';
import {LandingComponent} from "./features/editor/pages/landing/landing.component";

export const routes: Routes = [
  {
    path: '/home',
    component: LandingComponent,
    title: 'Pincel-Craft - Editor de imágenes profesional'
  },
];
