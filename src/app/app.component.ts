import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  postList: any[];
  titleInput: string;
  imageInput: string;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient) {
    this.http
      .get("http://localhost:3000/posts")
      .subscribe((response: any[]) => {
        this.postList = response;
      });
  }

  sendPost() {
    let body = {
      title: this.titleInput,
      image: this.imageInput,
      likes: 0,
    };
    this.http
      .post(
        "http://localhost:3000/posts",
        JSON.stringify(body),
        this.httpOptions
      )
      .subscribe((response) => {
        alert("Post added Successfully");
      });
  }
}
