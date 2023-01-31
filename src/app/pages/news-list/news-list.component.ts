import { Component, Inject, OnDestroy } from '@angular/core';
import { News } from 'src/app/shared/news';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnDestroy{  

  currentPage$ = new BehaviorSubject<number>(1) ;
  news : News[] = []
  currentPageData?:Observable<News[]>;
  url_data:string = "";
  subscription_route_data:any
  url_data_page:string = "";
  gameName = ""

  constructor(private route:ActivatedRoute, private http:HttpClient, @Inject(DOCUMENT) private document:Document){
    this.subscription_route_data = route.data.subscribe((routing_data) => {
      this.url_data = routing_data["url_data"]
      this.url_data_page = routing_data["url_data_page"]
      this.gameName = this.getGameNameFromUrl(routing_data["url_data"])
    })
    this.currentPage$.subscribe((pageNumber) => {
      this.currentPageData = this.getNewsPages(pageNumber, this.url_data_page)
      this.currentPageData.subscribe((serverNews) => {
        this.news = serverNews;
      })
    })
  }

  getNewsList(): Observable<News[]>{
    return this.http.get<News[]>(this.url_data);
  }

  getNewsPages(pageNumber:number, url_article:string){
    return this.http.get<News[]>(url_article + pageNumber);
  }
  
  nextPage(){
    this.currentPage$.next(this.currentPage$.value + 1)
  }
  
  previousPage(){
    if(this.currentPage$.value > 1){
      this.currentPage$.next(this.currentPage$.value - 1)
    }
  }

  cardOnClick(link:string){
    this.document.location.href = link
  }

  getGameNameFromUrl(url:string):string{
    if(url.includes("tft_articles")){
      return "TFT"
    }
    return "League of Legends"
  }

  ngOnDestroy(): void {
    this.subscription_route_data.unsubscribe()
  }

}