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

  // getCatePosts(categoryId): Promise<Entry<any>[]> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'blogPost'
  //   }, {'fields.slug': categoryId}))
  //     .then(res => res.items);
  // }

  getCatePosts(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'blogPost'
    }, query))
      .then(res => res.items);
  }

  getMusicPosts(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'musicPost'
    }, query))
      .then(res => res.items);
  }

  getMusicPost(postId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'musicPost'
    }, {'fields.slug': postId}))
      .then(res => res.items[0]);
  }

  getMusicCategories(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'musicCategory'
    }, query))
      .then(res => res.items);
  }

  getMusicCategory(categoryId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'musicCategory'
    }, {'fields.slug': categoryId}))
      .then(res => res.items[0]);
  }

  getSoftwarePosts(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'softwarePost'
    }, query))
      .then(res => res.items);
  }

  getSoftwarePost(postId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'softwarePost'
    }, {'fields.slug': postId}))
      .then(res => res.items[0]);
  }

  getSoftwareCategories(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'softwareCategory'
    }, query))
      .then(res => res.items);
  }

  getSoftwareCategory(categoryId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'SoftwareCategory'
    }, {'fields.slug': categoryId}))
      .then(res => res.items[0]);
  }

  getBusinessPosts(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'businessPost'
    }, query))
      .then(res => res.items);
  }

  getBusinessPost(postId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'businessPost'
    }, {'fields.slug': postId}))
      .then(res => res.items[0]);
  }

  getBusinessCategories(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'businessCategory'
    }, query))
      .then(res => res.items);
  }

  getBusinessCategory(categoryId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'businessCategory'
    }, {'fields.slug': categoryId}))
      .then(res => res.items[0]);
  }


}
