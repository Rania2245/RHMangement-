import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js';
import { CalendrierEmp } from 'src/app/Classes/calendrier-emp';
import { CalandrierService } from 'src/app/Services/calandrier.service';

@Component({
  selector: 'app-home-rh',
  templateUrl: './home-rh.component.html',
  styleUrls: ['./home-rh.component.css']
})
export class HomeRhComponent  {
  performanceFormOpen: boolean = false;
  constructor(private calandrierS: CalandrierService) {}
  openPerformanceForm() {
      this.performanceFormOpen = true;
  }

  closePerformanceForm() {
      this.performanceFormOpen = false;
  }
  testM: boolean = false;
 
  openM() {
    this.testM = !this.testM;

  }

  calendrierEmp!: CalendrierEmp;
  idCalendrierEmp!: number;
  objectif!: number;

  // Propriétés pour le graphique
  performanceData: number[] = [];
  objectifData!: number;



    creerObjectifPerformance(idCalendrierEmp: number, objectif: number): void {
      this.calandrierS.createObjectifPerformance(idCalendrierEmp, objectif).subscribe(
        (response) => {
          console.log('Objectif de performance créé avec succès');
          // Mettez à jour votre modèle ou effectuez d'autres actions nécessaires
          this.loadPerformanceData();
        },
        (error) => {
          console.error('Erreur lors de la création de l\'objectif de performance', error);
        }
      );
    }
private loadPerformanceData(): void {
  if (this.calendrierEmp) {
    // Calculer la performance comme la différence entre le total d'heures de travail et l'objectif
    const totalHeuresTravail = this.calendrierEmp.heureDep.getHours() - this.calendrierEmp.heureArriv.getHours();
    this.calendrierEmp.performance = totalHeuresTravail - this.calendrierEmp.objectif;

    // Mise à jour des données du graphique
    this.performanceData = [this.calendrierEmp.performance];
    this.objectifData = this.calendrierEmp.objectif;
  }
}
}
