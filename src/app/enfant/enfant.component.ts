import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../shared/services/communication.service';

@Component({
  selector: 'hlw-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css'],
})
export class EnfantComponent implements OnInit, OnDestroy, OnChanges {
  @Input() couleurs: string[] = [];
  @Output() couleur: EventEmitter<string> = new EventEmitter();

  information!: string;
  subscription!: Subscription;

  constructor(private communicationService: CommunicationService) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void {
    this.subscription = this.communicationService
      .getInformation()
      .subscribe((info: string) => (this.information = info));
  }

  getCouleur(couleur: string) {
    this.couleur.emit(couleur);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
