import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-for-life-cycle-hook',
  templateUrl: './child-for-life-cycle-hook.component.html',
  styleUrls: ['./child-for-life-cycle-hook.component.css']
})
export class ChildForLifeCycleHookComponent implements OnChanges {

 @Input() childValue: string | undefined;
  previousValue: string | undefined;

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if (changes['childValue']) {
      this.previousValue = changes['childValue'].previousValue;
      console.log('childValue changed from', changes['childValue'].previousValue, 'to', changes['childValue'].currentValue);
    }
  }


  testFunctionForParent() {
    console.log('lets invoke function from parent function');
  }

}
