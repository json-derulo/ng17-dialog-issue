import { NgModule } from "@angular/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MyComponent} from "./my.component";

@NgModule({
  declarations: [MyComponent],
  imports: [MatDialogModule],
  exports: [MyComponent],
})
export class MyModule {}
