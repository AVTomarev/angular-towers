import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { IIndicator } from 'src/app/shared/models/IIndicator.interface';

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.scss']
})
export class TowerComponent implements OnInit {
  @Input() indicator: IIndicator;

  constructor() { }

  ngOnInit() {
  }
}
