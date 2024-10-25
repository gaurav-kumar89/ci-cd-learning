import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushStretegyComponent } from './push-stretegy.component';

describe('PushStretegyComponent', () => {
  let component: PushStretegyComponent;
  let fixture: ComponentFixture<PushStretegyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PushStretegyComponent]
    });
    fixture = TestBed.createComponent(PushStretegyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
