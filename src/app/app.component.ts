import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "UESAN";
  fullName = "Luis Chang";
  age: Number = 35;
  customers: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>(
        "https://nodejs-mongodb-uesan.luischang.repl.co/api/v1/customer/getall"
      )
      .subscribe((response) => {
        console.log(response);
        this.customers = response;
      });
  }
}
