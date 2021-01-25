import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const materialUiModules = [
  MatBottomSheetModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: materialUiModules,
  exports: materialUiModules
})
export class MaterialUiModule { }
