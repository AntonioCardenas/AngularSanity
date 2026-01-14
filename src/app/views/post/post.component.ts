import {Component, OnInit, ChangeDetectorRef} from '@angular/core';

import {SanityService} from '../../services/sanity.service';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {toHTML} from '@portabletext/to-html'

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent  implements OnInit{
  id: any;
  postDataContent: any;
  isConfigured: boolean;
  constructor(
    public sanityService: SanityService, 
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.id = this.route.snapshot.params['id'];
    this.isConfigured = this.sanityService.isConfigured;
  }
  postData: any

  defaultImageURL =
    "https://cdn.sanity.io/images//production/f2618421dbd6de2a63ddea363195fbab8f41afc5-3543x2365.jpg";


  imageUrl(source: any) {
    return source ? this.sanityService.urlFor(source) : this.defaultImageURL;
  }


  ngOnInit() {
    this.getPost(this.id)
  }

  async getPost(id:string) {
    this.postData = await this.sanityService.getSpecificPost(id);
    this.postDataContent = toHTML(this.postData.content);
    this.cdr.detectChanges();
    return this.postData;
  }

}
