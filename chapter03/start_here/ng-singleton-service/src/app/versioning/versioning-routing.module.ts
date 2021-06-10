import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VersioningComponent } from './versioning.component';

const routes: Routes = [{
  path: '',
  component: VersioningComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VersioningRoutingModule { }
