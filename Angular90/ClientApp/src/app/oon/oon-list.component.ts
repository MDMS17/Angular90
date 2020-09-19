import { Component, Inject, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-oon-list',
  templateUrl: './oon-list.component.html',
})

export class OonListComponent implements OnInit {
  @Input() pageNumber: string;
  public selectedOon: oon;
  public oons: oon[];
  public baseUrl: string;
  public http: HttpClient;
  public router: Router;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, router: Router) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.router = router;
  }

  onCreate() {
    this.router.navigate(['oon/create']);
  }

  onSelect(oon: oon) {
    this.selectedOon = oon;
    console.log("Oon with Id " + this.selectedOon.mcpdOutOfNetworkId + " has been selected.");
    this.router.navigate(['oon', this.selectedOon.mcpdOutOfNetworkId]);
  }

  ngOnInit(): void {
    console.log(this.pageNumber);
    var url = this.baseUrl + "api/oon/";
    this.http.get<oon[]>(url).subscribe(result => { this.oons = result }, error => console.error(error));
  }
}
