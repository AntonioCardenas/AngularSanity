import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
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
  constructor(public sanityService: SanityService, private cdr: ChangeDetectorRef) {
  }
  posts: any[] = [];
  isConfigured = this.sanityService.isConfigured;

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
    this.cdr.detectChanges();

    console.group(`[BlogComponent] Data Fetching`);
    console.log(`Fetched ${this.posts.length} posts successfully.`);
    
    if (this.posts.length > 0) {
      console.table(this.posts.map(p => ({
        ID: p._id,
        Title: p.title,
        Category: p.category,
        Date: p.date
      })));
    }
    console.groupEnd();
    return this.posts;
  }

}
