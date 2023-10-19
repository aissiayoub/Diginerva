import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { OurStrategyComponent } from './pages/our-strategy/our-strategy.component';
import { GenericServicePageComponent } from './components/generic-service-page/generic-service-page.component'; // Import the LayoutModule

const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'about', component: AboutUsComponent},
   { path : 'services', component: GenericServicePageComponent},
  { path : 'contact', component: ContactComponent},
  { path : 'strategy', component: OurStrategyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
