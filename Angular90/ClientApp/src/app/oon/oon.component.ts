import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-oon',
  templateUrl: './oon.component.html',
})
export class OonComponent {
  public oon: oon;
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
      http.get<oon>(baseUrl + 'api/oon/' + id).subscribe(result => {
        this.oon = result;
      }, error => console.error(error));
    }
    else {
      console.log("Invalid id: routing back to home...");
      router.navigate(['home']);
    }
  }

  onEdit() {
    this.router.navigate(['oon/edit', this.oon.mcpdOutOfNetworkId]);
  }

  onDelete() {
    if (confirm("Do you really want to delete this OON?")) {
      var url = this.baseUrl + "api/oon/" + this.oon.mcpdOutOfNetworkId;
      this.http.delete(url).subscribe(res => { console.log("OON " + this.oon.mcpdOutOfNetworkId + " has been deleted."); this.router.navigate(["home"]); }, error => console.log(error));
    }
  }
}

