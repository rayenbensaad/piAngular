import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from '@workshop/core-data';

@Component({
  selector: 'workshop-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  newUser;
  
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.reset();
  }


  reset() {
    const emptyUser = {
      email: ""
    }
    this.newUser = emptyUser;
  }
}
