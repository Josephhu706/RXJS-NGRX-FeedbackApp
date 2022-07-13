import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbacksPageComponent } from './containers/feedbacks-page/feedbacks-page.component';
import { FilterComponent } from './containers/filter/filter.component';
import { ListComponent } from './containers/list/list.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { StoreModule } from '@ngrx/store';

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
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
