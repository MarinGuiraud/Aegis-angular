import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Guides, GuidesData } from 'src/app/shared/guides';

@Component({
  selector: 'app-guides-list',
  templateUrl: './guides-list.component.html',
  styleUrls: ['./guides-list.component.scss']
})
export class GuidesListComponent implements OnDestroy{

  url_data:string = ""
  subscription_route_data:any

  gameName:string = ""
  observable_guides$?:Observable<GuidesData[]>

  constructor(private route:ActivatedRoute, private http:HttpClient){
    this.subscription_route_data = route.data.subscribe((routing_data) => {
      this.url_data = routing_data["url_data"]
      this.gameName = this.getGameNameFromUrl(this.url_data)
    })
    this.observable_guides$ = this.getGuidesData(this.url_data)

  }
  
  activeModal(elementId:string, images:string[]){
    // Add image related to correct guide to the carousel
    let carousel:any = document.getElementById("carousel-image")
    for(let i=0; i<images.length; i++){
      console.log(images[i])
      // Create new elements
      const newDiv = document.createElement("div")
      const newFigure = document.createElement("figure")
      let newImage = new Image();
      newImage.src = images[i]
      newFigure.appendChild(newImage)
      newDiv.appendChild(newFigure)
      carousel.appendChild(newDiv)
    }
    let element = document.getElementById(elementId)
    element?.classList.add("is-active")
  }

  removeModal(elementId:string){
    let element = document.getElementById(elementId)
    element?.classList.remove("is-active")
    // Remove images from previous guides diplayed
    let carousel:any = document.getElementById("carousel-image")
    while (carousel.firstChild) {
      carousel.removeChild(carousel.firstChild);
    }
  }

  getGuidesData(url_data:string): Observable<GuidesData[]>{
    return  this.http.get<GuidesData[]>(url_data)
  }

  getGameNameFromUrl(url:string):string{
    if(url.includes("tft_guides")){
      return "TFT"
    }
    return "League of Legends"
  }

  ngOnDestroy(): void {
    this.subscription_route_data.unsubscribe()
  }
}
