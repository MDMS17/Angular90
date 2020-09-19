import { Component, Inject, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-appeal-list',
  templateUrl: './appeal-list.component.html',
})

export class AppealListComponent implements OnInit {
  @Input() pageNumber: string;
  public selectedAppeal: appeal;
  public appeals: appeal[];
  public baseUrl: string;
  public http: HttpClient;
  public router: Router;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, router: Router) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.router = router;
  }

  onCreate() {
    this.router.navigate(['appeal/create']);
  }

  onSelect(appeal: appeal) {
    this.selectedAppeal = appeal;
    console.log("appeal with Id " + this.selectedAppeal.mcpdAppealId + " has been selected.");
    this.router.navigate(['appeal', this.selectedAppeal.mcpdAppealId]);
  }

  ngOnInit(): void {
    console.log(this.pageNumber);
    var url = this.baseUrl + "api/appeal/";
    this.http.get<appeal[]>(url).subscribe(result => { this.appeals = result }, error => console.error(error));
  }
}

