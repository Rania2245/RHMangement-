import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentServiceService } from 'src/app/Services/comment-service.service';

@Component({
  selector: 'app-creer-comment',
  templateUrl: './creer-comment.component.html',
  styleUrls: ['./creer-comment.component.css']
})
export class CreerCommentComponent implements OnInit {
  employeeId!: number;
  commentForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private commentService: CommentServiceService
  ) {}

  ngOnInit(): void {
    this.employeeId = +this.route.snapshot.params['employeeId'];
   this.initForm();
  }
  initForm(): void {
    this.commentForm = this.fb.group({
      content: ['', Validators.required],
    });
  }
  submitComment() {
    const employeeId = this.employeeId; 
  
    if (this.commentForm.valid) {
      const newComment ={
      ...this.commentForm.value,
      employeeId: this.employeeId,
      };

      this.commentService.createComment(this.employeeId, newComment).subscribe(
        (createdComment) => {
          console.log('Comment created successfully:', createdComment);
          // Optionally, you can reset the form or perform other actions
        },
        (error) => {
          console.error('Error creating comment:', error);
          // Handle error, show error message, etc.
        }
      );
    }
  }
}
