import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Tournament } from 'src/app/shared/tournament';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnDestroy{

  url_data:string = ""
  subscription_route_data:any
  base_url_data:string = ""
  gameName:string = ""
  tools = new ToolsService;
  tournament_data:Tournament[] = []

  constructor(private route:ActivatedRoute, private http:HttpClient){
    this.subscription_route_data = this.route.data.subscribe((routing_data) => {
      this.url_data = routing_data["url_data"];
      this.base_url_data = routing_data["base_url_data"];
      this.gameName = this.tools.getGameNameFromUrl(this.url_data)
    })
    this.getTournamentData(this.base_url_data).subscribe((data) =>{
      this.tournament_data = this.orderTournament(data)
    })
  }

  getTournamentData(url_data:string){
    return  this.http.get<Tournament[]>(url_data)
  }

  orderTournament(data:Tournament[]){
    let res:Tournament[] = []
    console.log(data)
    for(let i=0; i < data.length; i++){
      data[i].teams.sort((a, b) => a.position - b.position)
    }
    return data
  }
  
  ngOnDestroy(): void {
    this.subscription_route_data.unsubscribe()
  }
}
