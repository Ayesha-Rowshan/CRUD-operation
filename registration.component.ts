import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  imports: [FormsModule, CommonModule],
})
export class RegistrationComponent {
  @Input() studentToEdit: any = null;
  @Output() closeModal = new EventEmitter<void>(); 
  @Output() submitStudent = new EventEmitter<any>(); 
 
  departments = ['CSE', 'EEE', 'IT']; 

  student = {
    name: '',
    fatherName: '',
    gender: '',
    dob: '',
    department: '',
    address: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  };

  ngOnChanges() {
    if (this.studentToEdit) {
      this.student = { ...this.studentToEdit };
    }
  }

  closeModalForm() {
    this.closeModal.emit();
  }

  onSubmit(studentForm: any) {
    if (!studentForm.valid) {
      alert('Please complete the form before submitting.');
      return;
    }
    if (this.student.password !== this.student.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    this.submitStudent.emit({ ...this.student });
     this.clearForm();
      this.closeModalForm();
  }

  clearForm() {
    this.student = {
      name: '',
      fatherName: '',
      gender: '',
      dob: '',
      department: '',
      address: '',
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    };
  }
}
