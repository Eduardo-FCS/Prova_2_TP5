import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './categories/category';
import { Music } from './musics/music';

@Injectable({
  providedIn: 'root'
})
export class SrvService {
  
  private serverAPI = 'https://music-api-2022.herokuapp.com/categories'

  constructor(private HttpClient: HttpClient) { }


  getCategoriesList() : Observable<Category[]> {
    return this.HttpClient.get<Category[]>(this.serverAPI)
  }

  getCategoriesByIdList(id: number) : Observable<Category> {
    return this.HttpClient.get<Category>(this.serverAPI + '/' + id)
  }

  postCategories(post: Category) : Observable<Category> {
    return this.HttpClient.post<Category>(this.serverAPI, post)
  }

  postMusics(music: Music) : Observable <Music> {
    return this.HttpClient.post<Music>(this.serverAPI, music)
  }

}
