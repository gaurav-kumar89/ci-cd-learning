import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';
import { RouterModule, Routes } from '@angular/router';
import { ChildForLifeCycleHookComponent } from './life-cycle-hook/child-for-life-cycle-hook/child-for-life-cycle-hook.component';
import { FormsModule } from '@angular/forms';
import { PushStretegyComponent } from './push-stretegy/push-stretegy.component';
import { ParentPushStretegyComponent } from './parent-push-stretegy/parent-push-stretegy.component';


const routes: Routes = [
  {path:'', component:LifeCycleHookComponent},
  {path:'push-stretegy', component:ParentPushStretegyComponent},
];

@NgModule({
  declarations: [
    LifeCycleHookComponent,
    ChildForLifeCycleHookComponent,
    PushStretegyComponent,
    ParentPushStretegyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,  
    RouterModule.forChild(routes)
  ]
})
export class NewModuleModule { }
