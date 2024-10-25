import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { ChildForLifeCycleHookComponent } from './child-for-life-cycle-hook/child-for-life-cycle-hook.component';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.css']
})
export class LifeCycleHookComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

@ViewChild('ChildForLifeCycleHookComponent') childForLifeCycleHookComponent!: ChildForLifeCycleHookComponent;


parentValue: string = '';
constructor() {
    //console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called', changes);
  }

  ngOnInit() {
   // console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    this.childForLifeCycleHookComponent.testFunctionForParent();
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
