import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomTooltipDirective } from './directives/custom-tooltip.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { CustomTooltipComponent } from './components/custom-tooltip/custom-tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomTooltipDirective,
    CustomTooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CustomTooltipComponent
  ]
})
export class AppModule { }
