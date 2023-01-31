import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from '../shared/articles';
import { News } from '../shared/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getArticlesData(url_data:string): Observable<Articles>{
    return  this.http.get<Articles>(url_data)
  }

  getBottomNewsData(article_link:string): Observable<News[]>{
    return this.http.get<News[]>(article_link)
  }
} 
