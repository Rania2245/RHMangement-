import { Component } from '@angular/core';
import { CalandrierService } from 'src/app/Services/calandrier.service';

@Component({
  selector: 'app-list-employees-dep',
  templateUrl: './list-employees-dep.component.html',
  styleUrls: ['./list-employees-dep.component.css']
})
export class ListEmployeesDepComponent {
  testM: boolean = false;
  performanceFormOpen: boolean =false;
  openM() {
    this.testM = !this.testM;

  }
  openPerformanceForm() {
    this.performanceFormOpen = true;
}

closePerformanceForm() {
    this.performanceFormOpen = false;
}
idCalendrierEmp!: number;
objectif!: number;

constructor(private calandrierS: CalandrierService) {}

creerObjectifPerformance(): void {
  this.calandrierS.createObjectifPerformance(this.idCalendrierEmp, this.objectif).subscribe(
    (response) => {
      console.log('Objectif de performance créé avec succès');
      // Mettez à jour votre modèle ou effectuez d'autres actions nécessaires
    },
    (error) => {
      console.error('Erreur lors de la création de l\'objectif de performance', error);
    }
  );
}
}
