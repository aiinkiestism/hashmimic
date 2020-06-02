import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  getPosts(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'Blog Post'
    }, query))
      .then(res => res.items);
  }

  getPost(postId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'Blog Post'
    }, {'sys.id': postId}))
      .then(res => res.items[0]);
  }
}
