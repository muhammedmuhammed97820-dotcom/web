import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  {path:'',component:HomeComponent,title:'المكتبة الإلكترونية'},
  {path:'books',component:BooksComponent,title:'الكتب'},
  {path:'categories',component:CategoriesComponent,title:'التصنيفات'},
  {path:'authors',component:AuthorsComponent,title:'المؤلفون'},
  {path:'auth',component:AuthComponent,title:'تسجيل الدخول'},
  {path:'admin',component:AdminComponent,title:'لوحة الإدارة'},
  {path:'**',redirectTo:''}
];
