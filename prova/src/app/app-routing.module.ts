import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { MusicsComponent } from './musics/musics.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'categories'},
  {path: 'categories', component: CategoriesComponent},
  {path: 'musics', component:MusicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
