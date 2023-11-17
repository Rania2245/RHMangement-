export class Conge {
    id: number;
    idEmploye: number;
    date: string;
    heure: string;
    description: string;
    statut: string; // Peut être 'En attente', 'Validé' ou 'Rejeté'
  
    constructor(
      id: number,
      idEmploye: number,
      date: string,
      heure: string,
      description: string,
      statut: string
    ) {
      this.id = id;
      this.idEmploye = idEmploye;
      this.date = date;
      this.heure = heure;
      this.description = description;
      this.statut = statut;
    }
  }
  