import {MatButtonModule, MatCardModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
  BrowserAnimationsModule,
  MatCheckboxModule,
  FormsModule,
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
