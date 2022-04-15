import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListVinylsComponent } from './list-vinyls/list-vinyls.component';
import { VinylDetailsComponent } from './vinyl-details/vinyl-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListVinylsComponent,
    VinylDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
