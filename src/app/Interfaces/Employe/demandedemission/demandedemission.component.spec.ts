import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandedemissionComponent } from './demandedemission.component';

describe('DemandedemissionComponent', () => {
  let component: DemandedemissionComponent;
  let fixture: ComponentFixture<DemandedemissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandedemissionComponent]
    });
    fixture = TestBed.createComponent(DemandedemissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
