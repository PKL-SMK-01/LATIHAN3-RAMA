import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  id:any;
  data:any;
  error = '';
  success = '';
  employee =new Employee();
  constructor(private route:ActivatedRoute, private dataService:DataService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.dataService.getEmployeeID(this.id).subscribe(res =>{
      // console.log(res);
      this.data =res;
      this.employee =this.data;
    });
  }

  updateEmployee(){
    this.dataService.updateEmployee(this.id, this.employee).subscribe(res =>{
    });
    this.success = 'Created successfully!';
  }

}
