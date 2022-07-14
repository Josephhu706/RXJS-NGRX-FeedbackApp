import { FeedbackEffects } from './state/feedback.effects';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbacksPageComponent } from './containers/feedbacks-page/feedbacks-page.component';
import { FilterComponent } from './containers/filter/filter.component';
import { ListComponent } from './containers/list/list.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { StoreModule } from '@ngrx/store';

import * as fromFeedback from './state/feedback.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    FeedbacksPageComponent,
    FilterComponent,
    ListComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // we pass reducers into there, ie our function and also the state
    //this defines the state for our root application which is feedbacks
    StoreModule.forRoot({feedbacks: fromFeedback.reducer}),
    //this lets us look at our state
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([FeedbackEffects]),
    //this lets us contact the api
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
