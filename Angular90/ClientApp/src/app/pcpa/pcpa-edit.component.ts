import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-pcpa-edit",
  templateUrl: './pcpa-edit.component.html'
})

export class PcpaEditComponent {
  public title: string;
  public pcpa: pcpa
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
    this.pcpa = <pcpa>{};
    var id = +activatedRoute.snapshot.params["id"];
    if (id) {
      this.editMode = true;
      var url = baseUrl + "api/pcpa/" + id;
      http.get<pcpa>(url).subscribe(res => { this.pcpa = res; this.title = "Edit PCP Assignment - " + this.pcpa.pcpAssignmentId; }, error => console.error(error));
    }
    else {
      this.editMode = false;
      this.title = "Create a new PCP Assignment";
    }
  }

  onSubmit(pcpa: pcpa) {
    var url = this.baseUrl + "api/pcpa";
    if (this.editMode) {
      this.http.put<pcpa>(url, pcpa).subscribe(res => { console.log("PCP Assignment " + pcpa.pcpAssignmentId + " has been updated."); this.router.navigate(["/pcpa"]); }, error => console.log(error));
    }
    else {
      this.http.post<pcpa>(url, pcpa).subscribe(res => { console.log("New PCP Assignment has been created."); this.router.navigate(["/pcpa"]); }, error => console.log(error));
    }
  }

  onBack() {
    this.router.navigate(["home"]);
  }
}

