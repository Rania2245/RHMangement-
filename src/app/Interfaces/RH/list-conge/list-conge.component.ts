import { Component, OnInit } from '@angular/core';
import { CongeService } from 'src/app/Services/conge-service.service';

@Component({
  selector: 'app-list-conge',
  templateUrl: './list-conge.component.html',
  styleUrls: ['./list-conge.component.css']
})
export class ListCongeComponent implements OnInit {
  conges!: any[];

  constructor(private congeService: CongeService) {}
  ngOnInit() {
    this.congeService.getConges().subscribe((data) => {
      this.conges = data;
    });
  }

  validerConge(idConge: number) {
    this.congeService.validerConge(idConge).subscribe(() => {
      // Mettez à jour la liste des congés après validation
      const congeIndex = this.conges.findIndex((conge) => conge.id === idConge);
      if (congeIndex !== -1) {
        this.conges[congeIndex].statut = "Validé";
      }
    });
    alert("validé");

  }

  rejeterConge(idConge: number) {
    this.congeService.rejeterConge(idConge).subscribe(() => {
      // Mettez à jour la liste des congés après rejet
      const congeIndex = this.conges.findIndex((conge) => conge.id === idConge);
      if (congeIndex !== -1) {
        this.conges[congeIndex].statut = 'Rejeté';
      }
    });
  }


}
