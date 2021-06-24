import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../shared/services/communication.service';

@Component({
  selector: 'hlw-enfant2',
  templateUrl: './enfant2.component.html',
  styleUrls: ['./enfant2.component.css'],
})
export class Enfant2Component implements OnInit, OnDestroy {
  information!: string;
  subscription!: Subscription;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.subscription = this.communicationService
      .getInformation()
      .subscribe((info: string) => (this.information = info));
  }

  changeMessage(): void {
    this.communicationService.setInformation(
      'Je change le message depuis enfant 2 !'
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
