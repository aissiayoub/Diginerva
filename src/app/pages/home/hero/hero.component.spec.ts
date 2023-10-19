import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let matDialog: MatDialog;
  let dialogRef: jest.Mocked<MatDialogRef<unknown, unknown>>;

  beforeEach(async () => {
    dialogRef = createDialogRefMock(); // Helper function to create mock MatDialogRef
    matDialog = createMatDialogMock(dialogRef); // Helper function to create mock MatDialog

    await TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        MatDialogModule,
        MatIconModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
      providers: [
        { provide: MatDialog, useValue: matDialog },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open a dialog', () => {
    component.openDialog();

    expect(matDialog.open).toHaveBeenCalledWith(component.videoDialog);
  });

  it('should subscribe to the afterClosed event of the dialog', () => {
    component.openDialog();

    expect(matDialog.open).toHaveBeenCalled();
    expect(dialogRef.afterClosed).toHaveBeenCalled();
  });

  it('should close all open dialogs', () => {
    component.onClose();

    expect(matDialog.closeAll).toHaveBeenCalled();
  });
});

// Helper function to create a mock MatDialog instance
  function createMatDialogMock(dialogRef: jest.Mocked<MatDialogRef<unknown, unknown>>) {
  return {
    open: jest.fn(() => dialogRef),
    closeAll: jest.fn(),
    // Add any other properties and methods you need to mock from MatDialog interface
  } as unknown as MatDialog;
}

// Helper function to create a mock MatDialogRef instance
function createDialogRefMock() {
  return {
    afterClosed: jest.fn(() => of(true)),
    // Add any other properties and methods you need to mock from MatDialogRef interface
  } as unknown as jest.Mocked<MatDialogRef<unknown, unknown>>;
}
