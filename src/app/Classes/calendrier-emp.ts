export class CalendrierEmp {
    IdCalandrierEmp: number;
    heureArriv: Date;
    heureDep: Date;
    heureSup: number;
    heureConge: number;
    objectif: number;
    performance: number;
  
    constructor(
      IdCalandrierEmp: number,
      heureArriv: Date,
      heureDep: Date,
      heureSup: number,
      heureConge: number,
      performance: number,
      objectif:number
    ) {
      this.IdCalandrierEmp = IdCalandrierEmp;
      this.heureArriv = heureArriv;
      this.heureDep = heureDep;
      this.heureSup = heureSup;
      this.heureConge = heureConge;
      this.performance=performance;
      this.objectif=objectif;
    }
  }
  