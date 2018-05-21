import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FudViewComponent} from './components/fud-view/fud-view.component';
import {PartnersComponent} from './components/partners/partners.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'partners', component: PartnersComponent
  },
  {
    path: 'about', component: AboutComponent,
  },
  {
    path: ':fudSlug', component: FudViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
