import { Employe } from "./employe";

export class Conge {
    id: number;
    employeid: Employe;
    date: Date;
    heure: string;
    description: string;
    statut: string; // Peut être 'En attente', 'Validé' ou 'Rejeté'
  
    constructor(
      id: number,
      employeid: Employe,
      date: Date,
      heure: string,
      description: string,
      statut: string
    ) {
      this.id = id;
      this.employeid = employeid;
      this.date = date;
      this.heure = heure;
      this.description = description;
      this.statut = statut;
    }
  }
  