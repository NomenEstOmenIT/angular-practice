import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  e: number = Math.E;
  str: string = "Hello world";
  date: Date = new Date();
}
