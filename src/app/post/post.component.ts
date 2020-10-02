import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  @Input() title: string;
  @Input() image: string;
  @Input() likes: number;
  @Input() id: number;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  incrementLikes() {
    this.likes++;
  }

  deletePost() {
    let url = "http://localhost:3000/posts/" + this.id;
    this.http.delete(url).subscribe((response) => {
      alert("post deleted");
    });
  }
}
