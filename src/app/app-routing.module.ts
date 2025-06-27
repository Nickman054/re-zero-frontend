import { NgModule } from '@angular/core';
import { CharactersComponent } from './pages/characters/characters.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: '', redirectTo: '/characters', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
