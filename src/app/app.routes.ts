import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/blog/blog.component').then(m => m.BlogComponent),
    pathMatch: 'full',
    title: "Post | Sanity"
  },
  {
    path: 'post/:id',
    loadComponent: () => import('./views/post/post.component').then(m => m.PostComponent),
    pathMatch: 'full',
    title: "Post | Sanity"
  }
];
