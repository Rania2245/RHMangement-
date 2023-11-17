import { Component } from '@angular/core';

@Component({
  selector: 'app-home-rh',
  templateUrl: './home-rh.component.html',
  styleUrls: ['./home-rh.component.css']
})
export class HomeRhComponent {
  performanceFormOpen: boolean = false;

  openPerformanceForm() {
      this.performanceFormOpen = true;
  }

  closePerformanceForm() {
      this.performanceFormOpen = false;
  }
}
