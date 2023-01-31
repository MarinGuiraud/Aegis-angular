import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Events } from 'src/app/shared/events';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-programmation',
  templateUrl: './programmation.component.html',
  styleUrls: ['./programmation.component.scss']
})
export class ProgrammationComponent implements OnDestroy{

  tools = new ToolsService
  gameName:string = ""
  url_data:string = ""
  subscription_route_data:any
  observable_prog$?:Observable<Events[]>
  
  constructor(private route:ActivatedRoute, private http:HttpClient){
    this.subscription_route_data = route.data.subscribe((routing_data) => {
      this.url_data = routing_data["url_data"]
      this.gameName = this.tools.getGameNameFromUrl(this.url_data)
    })
    this.observable_prog$ = this.getProgData(this.url_data)
  }

  getProgData(url_data:string):Observable<Events[]>{
    console.log(url_data)
    return  this.http.get<Events[]>(url_data)
  }

  redirectEvent(url:string){
    window.location.href = url
  }

  ngOnDestroy(): void {
    this.subscription_route_data.unsubscribe()
  }
}
