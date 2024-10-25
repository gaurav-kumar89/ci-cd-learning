import { Component } from '@angular/core';


@Component({
  selector: 'app-parent-push-stretegy',
  templateUrl: './parent-push-stretegy.component.html',
  styleUrls: ['./parent-push-stretegy.component.css'],

})
export class ParentPushStretegyComponent {
  data = 'Initial Data';

  updateData() {
    this.data = 'Updated Data';
  }

}
