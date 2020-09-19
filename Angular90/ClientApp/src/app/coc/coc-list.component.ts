import { Component, Inject, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-coc-list',
  templateUrl: './coc-list.component.html',
})

export class CocListComponent implements OnInit {
  @Input() pageNumber: string;
  public selectedCoc: coc;
  public cocs: coc[];
  public baseUrl: string;
  public http: HttpClient;
  public router: Router;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, router: Router) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.router = router;
  }

  onCreate() {
    this.router.navigate(['coc/create']);
  }

  onSelect(coc: coc) {
    this.selectedCoc = coc;
    console.log("Coc with Id " + this.selectedCoc.mcpdContinuityOfCareId + " has been selected.");
    this.router.navigate(['coc', this.selectedCoc.mcpdContinuityOfCareId]);
  }

  ngOnInit(): void {
    console.log(this.pageNumber);
    var url = this.baseUrl + "api/coc/";
    this.http.get<coc[]>(url).subscribe(result => { this.cocs = result }, error => console.error(error));
  }
}

