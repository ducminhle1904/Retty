import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FinalStepComponent } from './final-step/final-step.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SingleCourseComponent } from './single-course/single-course.component';
import { CalendarComponent } from './details/calendar/calendar.component';
import { SanitizedHtmlPipe } from './sanitized-html.pipe';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DetailsComponent,
    ConfirmationComponent,
    FinalStepComponent,
    HeaderComponent,
    NavigationComponent,
    SingleCourseComponent,
    CalendarComponent,
    SanitizedHtmlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
