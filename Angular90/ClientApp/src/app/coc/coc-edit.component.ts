import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-coc-edit",
  templateUrl: './coc-edit.component.html'
})

export class CocEditComponent {
  public title: string;
  public coc: coc;
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
    this.coc = <coc>{};
    var id = +activatedRoute.snapshot.params["id"];
    if (id) {
      this.editMode = true;
      var url = baseUrl + "api/coc/" + id;
      http.get<coc>(url).subscribe(res => { this.coc = res; this.title = "Edit - " + this.coc.mcpdContinuityOfCareId; }, error => console.error(error));
    }
    else {
      this.editMode = false;
      this.title = "Create a new COC";
    }
  }

  onSubmit(coc: coc) {
    var url = this.baseUrl + "api/coc";
    if (this.editMode) {
      this.http.put<coc>(url, coc).subscribe(res => { console.log("COC " + coc.mcpdContinuityOfCareId + " has been updated."); this.router.navigate(["/coc"]); }, error => console.log(error));
    }
    else {
      this.http.post<coc>(url, coc).subscribe(res => { console.log("New COC has been created."); this.router.navigate(["/coc"]); }, error => console.log(error));
    }
  }

  onBack() {
    this.router.navigate(["home"]);
  }
}
