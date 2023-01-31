import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from 'src/app/shared/player';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnDestroy{
  url_data:string = ""
  subscription_route_data:any
  base_url_data:string = ""
  gameName:string = ""
  tools = new ToolsService;
  observable_team$?:Observable<Player[]>

  constructor(private route:ActivatedRoute, private http:HttpClient){
    this.subscription_route_data = this.route.data.subscribe((routing_data) => {
      this.url_data = routing_data["url_data"];
      this.base_url_data = routing_data["base_url_data"];
      this.gameName = this.tools.getGameNameFromUrl(this.url_data)
    })
    this.observable_team$ = this.getTeamData(this.base_url_data)
    
  }

  getTeamData(url_data:string): Observable<Player[]>{
    return  this.http.get<Player[]>(url_data)
  }

  displayTab(tab_id:string){
    console.log("DANS LA FONCTION AVEC ", tab_id)
    var items = document.getElementsByClassName("player");
    for (var i=0; i < items.length; i++) {
      items[i].classList.add("is-hidden");
    }
    let tab_content = document.getElementById(tab_id)
    tab_content?.classList.remove("is-hidden")
  }

  ngOnDestroy(): void {
    this.subscription_route_data.unsubscribe()
  }

}
