import { KeyValue } from '@angular/common';
import { inject, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bufferCount } from 'rxjs';
import { News } from '../news';


@Injectable({
  providedIn: 'root'
})
export class ListPageService {
  constructor(public route:ActivatedRoute){
    console.log("Constructor original service")
  }

  getNewsFromJson(json_file:any){
    let news_list:News[] = []
    json_file.news.forEach(function (element:any){
      let new_element = new News(element.title, element.subtitle, element.image, element.link, new Date(element.dateOfCreation))
      news_list.push(new_element)
    });
    return(news_list);  
  }
}
