import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHookComponent } from './life-cycle-hook.component';

describe('LifeCycleHookComponent', () => {
  let component: LifeCycleHookComponent;
  let fixture: ComponentFixture<LifeCycleHookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifeCycleHookComponent]
    });
    fixture = TestBed.createComponent(LifeCycleHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
