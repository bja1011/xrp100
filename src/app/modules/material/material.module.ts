import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';
import {NgModule} from '@angular/core';

const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
  ],
})
export class MyMaterialModule {
}
