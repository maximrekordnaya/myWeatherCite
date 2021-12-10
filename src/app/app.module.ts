import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {NgParticlesModule} from "ng-particles";
import { BackComponent } from './back/back.component';




@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    BackComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgParticlesModule
    // AgmCoreModule.forRoot({
    //   apiKey:"AIzaSyBboistNraZLeuvS1eNbi6waTTx-440TkQ"
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
