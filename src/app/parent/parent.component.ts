import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../shared/services/communication.service';

@Component({
  selector: 'hlw-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  couleurs: string[] = [];
  couleur!: string;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.couleurs = ['blue', 'red', 'green', 'yellow', 'black', 'white'];
  }

  showCouleur(color: string) {
    this.couleur = color;
    this.communicationService.setInformation(
      `Message provenant du service de communication : ${this.couleur}`
    );
  }
}
