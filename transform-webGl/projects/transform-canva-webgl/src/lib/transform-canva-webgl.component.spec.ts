import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformCanvaWebglComponent } from './transform-canva-webgl.component';

describe('TransformCanvaWebglComponent', () => {
  let component: TransformCanvaWebglComponent;
  let fixture: ComponentFixture<TransformCanvaWebglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformCanvaWebglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformCanvaWebglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
