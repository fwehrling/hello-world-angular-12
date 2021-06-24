import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommunicationService } from '../shared/services/communication.service';

@Component({
  selector: 'hlw-enfant2',
  templateUrl: './enfant2.component.html',
  styleUrls: ['./enfant2.component.css'],
})
export class Enfant2Component implements OnInit, OnDestroy {
  information!: string;
  subscription!: Subscription;

  information$!: Observable<string>;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    // subcribe ancienne façon
    this.subscription = this.communicationService
      .getInformation()
      .subscribe((info: string) => (this.information = info));

    // subscribe nouvelle façon avec la programmation réactive
    this.communicationService
      .getInformation()
      .pipe(takeUntil(this.destroy$))
      .subscribe((info: string) => (this.information = info));

    // pipe async
    this.information$ = this.communicationService.getInformation();
  }

  changeMessage(): void {
    this.communicationService.setInformation(
      'Je change le message depuis enfant 2 !'
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
