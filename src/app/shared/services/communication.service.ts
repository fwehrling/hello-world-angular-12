import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  information = new BehaviorSubject('un message');

  getInformation(): Observable<string> {
    return this.information.asObservable();
  }

  setInformation(message: string): void {
    this.information.next(message);
  }
}
