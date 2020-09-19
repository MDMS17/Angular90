import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grievance',
  templateUrl: './grievance.component.html',
})
export class GrievanceComponent {
  public grievance: grievance;
  public router: Router;
  public baseUrl: string;
  public http: HttpClient;

  constructor(activatedRoute: ActivatedRoute, router: Router, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.router = router;
    var id = +activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      http.get<grievance>(baseUrl + 'api/grievance/' + id).subscribe(result => {
        this.grievance = result;
      }, error => console.error(error));
    }
    else {
      console.log("Invalid id: routing back to home...");
      router.navigate(['home']);
    }
  }

  onEdit() {
    this.router.navigate(['grievance/edit', this.grievance.mcpdGrievanceId]);
  }

  onDelete() {
    if (confirm("Do you really want to delete this grievance?")) {
      var url = this.baseUrl + "api/grievance/" + this.grievance.mcpdGrievanceId;
      this.http.delete(url).subscribe(res => { console.log("grievance " + this.grievance.mcpdGrievanceId + " has been deleted."); this.router.navigate(["home"]); }, error => console.log(error));
    }
  }
}

