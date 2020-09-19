import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coc',
  templateUrl: './coc.component.html',
})
export class CocComponent {
  public coc: coc;
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
      http.get<coc>(baseUrl + 'api/coc/' + id).subscribe(result => {
        this.coc = result;
      }, error => console.error(error));
    }
    else {
      console.log("Invalid id: routing back to home...");
      router.navigate(['home']);
    }
  }

  onEdit() {
    this.router.navigate(['coc/edit', this.coc.mcpdContinuityOfCareId]);
  }

  onDelete() {
    if (confirm("Do you really want to delete this COC?")) {
      var url = this.baseUrl + "api/coc/" + this.coc.mcpdContinuityOfCareId;
      this.http.delete(url).subscribe(res => { console.log("COC " + this.coc.mcpdContinuityOfCareId + " has been deleted."); this.router.navigate(["home"]); }, error => console.log(error));
    }
  }
}
