import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  constructor(public dialog: MatDialog,) {
    this.openDialog();

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PartnersInfoComponent, {
      width: '250px',
    });
  }


  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
    <div class="text-center">
      <p>
        This page load a spreadsheet created by <br><a href="http://rppl.info/" target="_blank">http://rppl.info/</a>
      </p>
      <button mat-raised-button color="secondary" (click)="dialogRef.close()">OK</button>
    </div>`,
})
export class PartnersInfoComponent {

  constructor(
    public dialogRef: MatDialogRef<PartnersInfoComponent>,) {
  }


}


