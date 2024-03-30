import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UploadEventsComponent } from './upload-events/upload-events.component';

const routes: Routes = [
{path: 'admin-page', component: AdminPageComponent},
{path: 'upload-events', component: UploadEventsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
