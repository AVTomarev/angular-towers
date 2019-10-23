import { Component, OnInit } from '@angular/core';

import { FetchService } from 'src/app/shared/services/fetch.service';

import { IIndicator } from 'src/app/shared/models/IIndicator.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public indicators: IIndicator[];

  constructor(
    private fetchService: FetchService
  ) {}

  ngOnInit() {
    this.fetchService.getindicators()
      .subscribe(indicators => {
        this.indicators = indicators;
      });
  }
}
