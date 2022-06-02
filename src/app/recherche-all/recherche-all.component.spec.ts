import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheAllComponent } from './recherche-all.component';

describe('RechercheAllComponent', () => {
  let component: RechercheAllComponent;
  let fixture: ComponentFixture<RechercheAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
