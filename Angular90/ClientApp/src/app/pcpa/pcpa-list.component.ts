import { Component, Inject, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-pcpa-list',
  templateUrl: './pcpa-list.component.html',
})

export class PcpaListComponent implements OnInit {
  @Input() pageNumber: string;
  public selectedPcpa: pcpa;
  public pcpas: pcpa[];
  public baseUrl: string;
  public http: HttpClient;
  public router: Router;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, router: Router) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.router = router;
  }

  onCreate() {
    this.router.navigate(['pcpa/create']);
  }

  onSelect(pcpa: pcpa) {
    this.selectedPcpa = pcpa;
    console.log("PCP Assignment with Id " + this.selectedPcpa.pcpAssignmentId + " has been selected.");
    this.router.navigate(['pcpa', this.selectedPcpa.pcpAssignmentId]);
  }

  ngOnInit(): void {
    console.log(this.pageNumber);
    var url = this.baseUrl + "api/pcpa/";
    this.http.get<pcpa[]>(url).subscribe(result => { this.pcpas = result }, error => console.error(error));
  }
}
