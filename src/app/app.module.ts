import { CustomTimeRangeDirective } from './timerange.validators';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DailyComponent } from './daily/daily.component';
import { AlertModule } from 'ngx-bootstrap';
import { DailistComponent } from './dailist/dailist.component';
import { DailycreatorComponent } from './dailycreator/dailycreator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeeklystatsComponent } from './weeklystats/weeklystats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DailyComponent,
    DailistComponent,
    DailycreatorComponent,
    WeeklystatsComponent,
    CustomTimeRangeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
