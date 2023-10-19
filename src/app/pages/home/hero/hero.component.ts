import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  url = 'https://www.youtube.com/embed/daZnG9nwKNI';

  @ViewChild('videoDialog')
  videoDialog!: TemplateRef<HTMLVideoElement>;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(this.videoDialog);
    dialogRef.afterClosed().subscribe();
  }

  onClose() {
    this.dialog.closeAll();
  }
}
