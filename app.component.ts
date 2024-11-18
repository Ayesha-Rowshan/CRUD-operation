import { Component, OnInit } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RegistrationComponent, CommonModule, FormsModule],
})
export class AppComponent implements OnInit {
  isModalOpen = false;
  studentData: any[] = [];
  studentToEdit: any = null; 
  editingIndex: number | null = null; 

  ngOnInit() {
    const storedData = localStorage.getItem('studentData');
    if (storedData) {
      this.studentData = JSON.parse(storedData);
    }
  }

  openRegistrationForm() {
    this.isModalOpen = true;
    this.studentToEdit = null; 
    this.editingIndex = null; 
  }

  closeRegistrationForm() {
    this.isModalOpen = false;
    this.studentToEdit = null;
    this.editingIndex = null;
  }

  addOrUpdateStudent(student: any) {
    if (this.editingIndex !== null) {
      this.studentData[this.editingIndex] = student;
      this.editingIndex = null;
    } else {
      this.studentData.push(student);
    }
    localStorage.setItem('studentData', JSON.stringify(this.studentData));
    console.log('Student data saved:', student);

    this.closeRegistrationForm();
  }

  editStudent(index: number) {
    this.studentToEdit = { ...this.studentData[index] }; 
    this.editingIndex = index; 
    this.isModalOpen = true;
  }

  deleteStudent(index: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.studentData.splice(index, 1);
      localStorage.setItem('studentData', JSON.stringify(this.studentData));
    }
  }
}
