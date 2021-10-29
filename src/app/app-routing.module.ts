import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FinalStepComponent } from './final-step/final-step.component';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'final-step', component: FinalStepComponent },
  { path: '', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
