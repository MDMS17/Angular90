import { Component, Inject, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-grievance-list',
  templateUrl: './grievance-list.component.html',
})

export class GrievanceListComponent implements OnInit {
  @Input() pageNumber: string;
  public selectedGrievance: grievance;
  public grievances: grievance[];
  public baseUrl: string;
  public http: HttpClient;
  public router: Router;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, router: Router) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.router = router;
  }

  onCreate() {
    this.router.navigate(['grievance/create']);
  }

  onSelect(grievance: grievance) {
    this.selectedGrievance = grievance;
    console.log("Grievance with Id " + this.selectedGrievance.mcpdGrievanceId + " has been selected.");
    this.router.navigate(['grievance', this.selectedGrievance.mcpdGrievanceId]);
  }

  ngOnInit(): void {
    console.log(this.pageNumber);
    var url = this.baseUrl + "api/grievance/";
    this.http.get<grievance[]>(url).subscribe(result => { this.grievances = result }, error => console.error(error));
  }
}


