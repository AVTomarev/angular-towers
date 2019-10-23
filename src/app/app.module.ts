import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TowerComponent } from './shared/components/tower/tower.component';
import { SeparateDigitsPipe } from './shared/pipes/separate-digits.pipe';
import { ValueToPercentsPipe } from './shared/pipes/value-to-percents.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TowerComponent,
    SeparateDigitsPipe,
    ValueToPercentsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
