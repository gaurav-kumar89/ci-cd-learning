import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildForLifeCycleHookComponent } from './child-for-life-cycle-hook.component';

describe('ChildForLifeCycleHookComponent', () => {
  let component: ChildForLifeCycleHookComponent;
  let fixture: ComponentFixture<ChildForLifeCycleHookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildForLifeCycleHookComponent]
    });
    fixture = TestBed.createComponent(ChildForLifeCycleHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
