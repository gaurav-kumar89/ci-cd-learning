import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-push-stretegy',
  templateUrl: './push-stretegy.component.html',
  styleUrls: ['./push-stretegy.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PushStretegyComponent {
  @Input() data: any;

}
