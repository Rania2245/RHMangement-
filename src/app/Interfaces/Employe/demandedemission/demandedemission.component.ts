import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Demission } from 'src/app/Classes/demission';
import { Employe } from 'src/app/Classes/employe';
import { DemissionServiceService } from 'src/app/Services/demission-service.service';
import { EmployeServiceService } from 'src/app/Services/employe-service.service';

@Component({
  selector: 'app-demandedemission',
  templateUrl: './demandedemission.component.html',
  styleUrls: ['./demandedemission.component.css']
})
export class DemandedemissionComponent implements OnInit {
  id: any;
  employe!: Employe;
  demissionForm!: FormGroup; // Use FormGroup for form handling

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: EmployeServiceService,
    private demissionService: DemissionServiceService,
    private fb: FormBuilder // Inject FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);

    this.service.getEmpById(this.id).subscribe((data) => {
      console.log(data);
      this.employe = data;
    });

    this.initForm();
  }

  // Initialize form using FormBuilder
  initForm(): void {
    this.demissionForm = this.fb.group({
      date: [new Date(), Validators.required],
      reason: ['', Validators.required],
      statut: ['pending', Validators.required],
    });
  }


  submitDemission() {
    if (this.demissionForm.valid) {
      // Assuming you have the employeId, you need to replace it with the actual value
      const employeId = this.id ; // Replace with the actual employeId

      // Extract form values
      const demissionData: Demission = this.demissionForm.value;

      this.demissionService.createDemission(employeId, demissionData).subscribe(
        (result) => {
          console.log('Demission request submitted successfully:', result);
          // You may want to navigate to a different page or show a success message
        },
        (error) => {
          console.error('Error submitting demission request:', error);
          // Handle error, show error message, etc.
        }
      );
    }
  }
}
