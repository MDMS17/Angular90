import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appeal',
  templateUrl: './appeal.component.html',
})
export class AppealComponent {
  public appeal: appeal;
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
      http.get<appeal>(baseUrl + 'api/appeal/' + id).subscribe(result => {
        this.appeal = result;
      }, error => console.error(error));
    }
    else {
      console.log("Invalid id: routing back to home...");
      router.navigate(['home']);
    }
  }

  onEdit() {
    this.router.navigate(['appeal/edit', this.appeal.mcpdAppealId]);
  }

  onDelete() {
    if (confirm("Do you really want to delete this appeal?")) {
      var url = this.baseUrl + "api/appeal/" + this.appeal.mcpdAppealId;
      this.http.delete(url).subscribe(res => { console.log("appeal " + this.appeal.mcpdAppealId + " has been deleted."); this.router.navigate(["home"]); }, error => console.log(error));
    }
  }
}

