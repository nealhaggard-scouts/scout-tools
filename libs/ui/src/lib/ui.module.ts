
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AppBarModule } from "@syncfusion/ej2-angular-navigations";
        
        @NgModule({
          imports: [
            AppBarModule,
            CommonModule,
          ],
          declarations: [
            MainMenuComponent
          ],
          exports: [
            MainMenuComponent
          ]
        })
        export class UiModule { }
        