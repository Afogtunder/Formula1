import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TracksComponent } from './pages/tracks/tracks.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { BlogListComponent } from './pages/blog/blog-list/blog-list.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';




export const routes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) 
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'drivers',
        loadComponent: () => import('./pages/drivers/drivers.component').then(m => m.DriversComponent)
    },
    {
        path: 'teams',
        loadComponent: () => import('./pages/teams/teams.component').then(m => m.TeamsComponent)
    },
    {
        path: 'tracks',
        loadComponent: () => import('./pages/tracks/tracks.component').then(m => m.TracksComponent)
    },
    {
        path: 'blogs',
        loadComponent: () => import('./pages/blog/blog-list/blog-list.component').then(m => m.BlogListComponent)
    },
    {
        path: 'blog/:id',
        loadComponent: () => import('./pages/blog/blog-detail/blog-detail.component').then(m => m.BlogDetailComponent)
    },
    

    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
    },
];
