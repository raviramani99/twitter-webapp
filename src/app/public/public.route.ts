import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HastagListComponent } from '../secure/hastag-list/hastag-list.component';

export const PUBLIC_ROUTES: Routes = [
    {
        path: 'hastag2',
        component: HastagListComponent
    }

];

