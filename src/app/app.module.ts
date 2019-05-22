import { BrowserModule } from '@angular/platform-browser';
import { isDevMode, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Level, LoggerModule } from '@ngx-toolkit/logger';
import { HttpClientModule } from '@angular/common/http';

const LOG_LEVEL: Level = isDevMode() ? Level.DEBUG : Level.ERROR;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot(LOG_LEVEL),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
