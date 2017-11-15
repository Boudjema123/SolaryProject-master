import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdtaComponent } from './gdta.component';

describe('GdtaComponent', () => {
  let component: GdtaComponent;
  let fixture: ComponentFixture<GdtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
