import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Conge } from 'src/app/Classes/conge';
import { Employe } from 'src/app/Classes/employe';
import { CongeService } from 'src/app/Services/conge-service.service';
import { EmployeServiceService } from 'src/app/Services/employe-service.service';

@Component({
  selector: 'app-demandeconge',
  templateUrl: './demandeconge.component.html',
  styleUrls: ['./demandeconge.component.css']
})
export class DemandecongeComponent implements OnInit{
  demandeCongeForm!: FormGroup;
  id: any;

  employe !: Employe;
  constructor(private activatedRoute: ActivatedRoute,private fb: FormBuilder,public service: EmployeServiceService, private congeService: CongeService) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    console.log(this.id);
    this.service.getEmpById(this.id).subscribe(data => {
      console.log(data)
      this.employe = data
    }
    )
    this.initForm();
  }

  initForm(): void {
    this.demandeCongeForm = this.fb.group({
      startDate: [, Validators.required],
      endDate: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  createLeaveRequest() {
    const employeeId = this.id; 
    if (this.demandeCongeForm.valid) {
    const leaveRequestData = { 
     
        ...this.demandeCongeForm.value,
        employeeId: this.id, // Include employeeId in the data
      }; 
  
    this.congeService.createLeaveRequest(employeeId, leaveRequestData).subscribe(
      (response) => {
        console.log('Leave request created successfully:', response);
        // Handle the response or update your component as needed
      },
      (error) => {
        console.error('Error creating leave request:', error);
        // Handle errors
      }
    );
    };
  }
 /* onSubmit(): void {
    if (this.demandeCongeForm.valid) {
      const congeData = {
        ...this.demandeCongeForm.value,
        employeeId: this.id, // Include employeeId in the data
      };
  
      this.congeService.createConge(congeData).subscribe(
        (response: Conge) => {
          console.log('Congé demandé avec succès', response);
          // Réinitialiser le formulaire après la soumission réussie
          this.demandeCongeForm.reset();
        },
        (error) => {
          console.error('Erreur lors de la demande de congé', error);
          // Gérer l'erreur, afficher un message à l'utilisateur, etc.
        }
      );
    }
  }*/

}
