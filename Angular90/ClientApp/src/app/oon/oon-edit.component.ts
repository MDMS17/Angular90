import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-oon-edit",
  templateUrl: './oon-edit.component.html'
})

export class OonEditComponent {
  public title: string;
  public oon: oon
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
    this.oon = <oon>{};
    var id = +activatedRoute.snapshot.params["id"];
    if (id) {
      this.editMode = true;
      var url = baseUrl + "api/oon/" + id;
      http.get<oon>(url).subscribe(res => { this.oon = res; this.title = "Edit OON - " + this.oon.mcpdHeaderId; }, error => console.error(error));
    }
    else {
      this.editMode = false;
      this.title = "Create a new OON";
    }
  }

  onSubmit(oon: oon) {
    var url = this.baseUrl + "api/oon";
    if (this.editMode) {
      this.http.put<oon>(url, oon).subscribe(res => { console.log("OON " + oon.mcpdHeaderId + " has been updated."); this.router.navigate(["/oon"]); }, error => console.log(error));
    }
    else {
      this.http.post<oon>(url, oon).subscribe(res => { console.log("New OON has been created."); this.router.navigate(["/oon"]); }, error => console.log(error));
    }
  }

  onBack() {
    this.router.navigate(["home"]);
  }
}
