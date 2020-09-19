import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-appeal-edit",
  templateUrl: './appeal-edit.component.html'
})

export class AppealEditComponent {
  public title: string;
  public appeal: appeal;
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
    this.appeal = <appeal>{};
    var id = +activatedRoute.snapshot.params["id"];
    if (id) {
      this.editMode = true;
      var url = baseUrl + "api/appeal/" + id;
      http.get<appeal>(url).subscribe(res => { this.appeal = res; this.title = "Edit - " + this.appeal.appealId; }, error => console.error(error));
    }
    else {
      this.editMode = false;
      this.title = "Create a new Appeal";
    }
  }

  onSubmit(appeal: appeal) {
    var url = this.baseUrl + "api/appeal";
    if (this.editMode) {
      this.http.put<appeal>(url, appeal).subscribe(res => { console.log("Appeal " + appeal.mcpdAppealId + " has been updated."); this.router.navigate(["home"]); }, error => console.log(error));
    }
    else {
      this.http.post<appeal>(url, appeal).subscribe(res => { console.log("New appeal has been created."); this.router.navigate(["home"]); }, error => console.log(error));
    }
  }

  onBack() {
    this.router.navigate(["home"]);
  }
}


