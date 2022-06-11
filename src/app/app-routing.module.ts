import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'loader',
    component: LoaderComponent,
  },
  {
    path: '',
    component: LoaderComponent,
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
