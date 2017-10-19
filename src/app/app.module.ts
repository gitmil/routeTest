import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';

import { DataService } from './services/data.service';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  //{ path: 'comp2/:id',      component: Comp2Component },
  { path: 'comp2/:id',      component: Comp2Component },
];

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
