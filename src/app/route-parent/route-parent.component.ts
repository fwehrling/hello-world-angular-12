import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hlw-route-parent',
  templateUrl: './route-parent.component.html',
  styleUrls: ['./route-parent.component.css'],
})
export class RouteParentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToFilles() {
    this.router.navigate(['/', 'route-parent']);
  }

  goToFillesB() {
    this.router.navigate(['/', 'route-parent', 'b']);
  }
}
