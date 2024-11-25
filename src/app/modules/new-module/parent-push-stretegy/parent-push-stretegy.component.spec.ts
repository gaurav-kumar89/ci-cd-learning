import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPushStretegyComponent } from './parent-push-stretegy.component';

xdescribe('ParentPushStretegyComponent', () => {
  let component: ParentPushStretegyComponent;
  let fixture: ComponentFixture<ParentPushStretegyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentPushStretegyComponent]
    });
    fixture = TestBed.createComponent(ParentPushStretegyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
