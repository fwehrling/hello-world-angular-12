import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComptaComponent } from './compta/compta.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: ComptaComponent }];

@NgModule({
  declarations: [ComptaComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdministrationModule {}
