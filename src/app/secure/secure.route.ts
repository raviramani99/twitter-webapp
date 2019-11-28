import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HastagListComponent } from './hastag-list/hastag-list.component';

export const SECURE_ROUTES: Routes = [
    {
        path: 'hastag',
        component: HastagListComponent
    }
];

