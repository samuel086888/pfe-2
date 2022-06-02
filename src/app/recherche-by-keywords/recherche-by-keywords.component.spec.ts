import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheByKeywordsComponent } from './recherche-by-keywords.component';

describe('RechercheByKeywordsComponent', () => {
  let component: RechercheByKeywordsComponent;
  let fixture: ComponentFixture<RechercheByKeywordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheByKeywordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheByKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
