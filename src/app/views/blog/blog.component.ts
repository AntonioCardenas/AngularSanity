import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SanityService} from "../../services/sanity.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  constructor(private sanityService: SanityService) {
  }
  posts: any[] = [];

  defaultImageURL =
    "https://cdn.sanity.io/images//production/f2618421dbd6de2a63ddea363195fbab8f41afc5-3543x2365.jpg";


  imageUrl(source: any) {
    return source ? this.sanityService.urlFor(source) : this.defaultImageURL;
  }

  ngOnInit(): void {
    this.getPosts();
  }

  async getPosts(): Promise<any[]> {
    this.posts = await this.sanityService.getAllPosts();
    console.log(this.posts);
    return this.posts;
  }

}
