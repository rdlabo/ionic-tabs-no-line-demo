import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: Tab3Page },
      { path: 'tab3-sub', loadChildren: './tab3-sub/tab3-sub.module#Tab3SubPageModule' }
      ])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
