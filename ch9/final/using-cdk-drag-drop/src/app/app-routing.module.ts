import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoldersListComponent } from './folders-list/folders-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'folders-list',
  },
  {
    path: 'folders-list',
    component: FoldersListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
