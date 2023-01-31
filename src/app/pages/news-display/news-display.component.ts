import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Articles } from 'src/app/shared/articles';
import { LOL_ARTICLES_URL } from 'src/app/shared/constants/urls';
import { News } from 'src/app/shared/news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsDisplayComponent implements OnDestroy{
    url_data:string = ""
    subscription_route_data:any

    base_url_data:string = ""
    observable_article_data$?:Observable<Articles>
    observable_news_data$?:Observable<News[]>

    constructor(private route:ActivatedRoute, private news_service:NewsService){
      this.subscription_route_data = this.route.data.subscribe((routing_data) => {
        this.url_data = routing_data["url_data"];
        this.base_url_data = routing_data["base_url_data"]
      })
      this.observable_article_data$ = this.news_service.getArticlesData(this.base_url_data + this.url_data)
      this.observable_news_data$ = this.news_service.getBottomNewsData(this.base_url_data + "/bottom_articles" + this.url_data)
    }

    ngOnDestroy(): void {
      this.subscription_route_data.unsubscribe()
    }
}


