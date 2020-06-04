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
      content_type: 'blogPost'
    }, query))
      .then(res => res.items);
  }

  getPost(postId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'blogPost'
    }, {'fields.slug': postId}))
      .then(res => res.items[0]);
  }

  getCategories(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'category'
    }, query))
      .then(res => res.items);
  }

  getCategory(categoryId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'category'
    }, {'fields.slug': categoryId}))
      .then(res => res.items[0]);
  }


}
