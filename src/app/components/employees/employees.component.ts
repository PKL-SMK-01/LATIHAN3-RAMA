import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Employee } from "src/app/employee";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees:any;
  error = '';
  success = '';
  employee = new Employee();

  constructor(private dataService:DataService) {}

  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData(){
    this.dataService.getData().subscribe(res =>{
      this.employees = res;
      // console.log(this.employees);
    })
  }

  insertData(){
    // console.log(this.employee);
    this.dataService.insertData(this.employee).subscribe(res =>{
      this.getEmployeesData();
      this.success = 'Created successfully!';
    })
  }

  deleteData(id){
    this.dataService.deleteData(id).subscribe(res => {
      this.getEmployeesData();
      this.success = 'Delete successfully!';
    })
  }
}
