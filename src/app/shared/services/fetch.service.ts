import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { IIndicator } from 'src/app/shared/models/IIndicator.interface';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

export interface IWsMessage<T> {
  event: string;
  data: T;
}

export interface IWebsocketService {
  on<T>(event: string): Observable<T>;
  send(event: string, data: any): void;
  status: Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private ws: WebSocketSubject<IIndicator[]>;

  constructor() {
    this.ws = webSocket<IIndicator[]>('ws://45.67.57.7:80');
  }

  public getindicators(): Observable<IIndicator[]> {
    return new Observable(subscriber => {
      this.ws.subscribe(indicators => {
        subscriber.next(indicators);
      });
    });
  }
}
