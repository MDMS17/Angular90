import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-grievance-edit",
  templateUrl: './grievance-edit.component.html'
})

export class GrievanceEditComponent {
  public title: string;
  public grievance: grievance;
  public editMode: boolean;
  public baseUrl: string;
  public http: HttpClient;
  public router: Router;

  constructor(activatedRoute: ActivatedRoute,
    router: Router,
    http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.router = router;
    this.http = http;
    this.baseUrl = baseUrl;
    this.grievance = <grievance>{};
    var id = +activatedRoute.snapshot.params["id"];
    if (id) {
      this.editMode = true;
      var url = baseUrl + "api/grievance/" + id;
      http.get<grievance>(url).subscribe(res => { this.grievance = res; this.title = "Edit grievance - " + this.grievance.mcpdGrievanceId; }, error => console.error(error));
    }
    else {
      this.editMode = false;
      this.title = "Create a new grievance";
    }
  }

  onSubmit(grievance: grievance) {
    var url = this.baseUrl + "api/grievance";
    if (this.editMode) {
      this.http.put<grievance>(url, grievance).subscribe(res => { console.log("Grievance " + grievance.mcpdGrievanceId + " has been updated."); this.router.navigate(["/grievance"]); }, error => console.log(error));
    }
    else {
      this.http.post<grievance>(url, grievance).subscribe(res => { console.log("New grievance has been created."); this.router.navigate(["/grievance"]); }, error => console.log(error));
    }
  }

  onBack() {
    this.router.navigate(["home"]);
  }
}
