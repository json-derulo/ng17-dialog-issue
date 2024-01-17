import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MyModule} from "./my.module";
import {MatDialog} from "@angular/material/dialog";
import {MyComponent} from "./my.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MyModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng17-dialog-issue';

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(MyComponent);
  }
}
