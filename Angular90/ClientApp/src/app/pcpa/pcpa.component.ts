import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pcpa',
  templateUrl: './pcpa.component.html',
})
export class PcpaComponent {
  public pcpa: pcpa;
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
      http.get<pcpa>(baseUrl + 'api/pcpa/' + id).subscribe(result => {
        this.pcpa = result;
      }, error => console.error(error));
    }
    else {
      console.log("Invalid id: routing back to home...");
      router.navigate(['home']);
    }
  }

  onEdit() {
    this.router.navigate(['pcpa/edit', this.pcpa.pcpAssignmentId]);
  }

  onDelete() {
    if (confirm("Do you really want to delete this PCP Assignment?")) {
      var url = this.baseUrl + "api/pcpa/" + this.pcpa.pcpAssignmentId;
      this.http.delete(url).subscribe(res => { console.log("PCP Assignment " + this.pcpa.pcpAssignmentId + " has been deleted."); this.router.navigate(["home"]); }, error => console.log(error));
    }
  }
}
