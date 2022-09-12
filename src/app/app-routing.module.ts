import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PoemComponent } from './poem/poem.component';
import poems from '../assets/poems.json';

const poemsRoutes: Routes = poems.poems.map( poem => { 
  return { path: `poems/${poem.route}`, component: PoemComponent, data: {poemTitle: poem.title, poemText: poem.text, poemImage: poem.image}}}
);

const routes: Routes = [
  { path: '', component: HomeComponent},
  ...poemsRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
