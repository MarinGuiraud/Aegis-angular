import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs';
import { URL_TWITCH_LIVE, URL_YOUTUBE_CHANNELS } from '../shared/constants/urls';
import { TwitchLive } from '../shared/twitch-live';
import { YoutubeChannels } from '../shared/youtube-channels';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  observable_twitch_live$?:Observable<TwitchLive[]>
  twitch_live_data?:TwitchLive[]
  subscription_twitch_live?:any
  observable_youtube_channels$?:Observable<YoutubeChannels[]>

  constructor(private http:HttpClient){
    this.observable_twitch_live$ = this.getTwitchLive()
    this.subscription_twitch_live = this.observable_twitch_live$.subscribe((data: TwitchLive[]) => {
      this.twitch_live_data = this.ajustTwitchLiveData(data)
    })
    this.observable_youtube_channels$ = this.getYoutubeChannels()
  }

  activeModal(elementId:string){
    let element = document.getElementById(elementId)
    element?.classList.add("is-active")
  }

  removeModal(elementId:string){
    let element = document.getElementById(elementId)
    element?.classList.remove("is-active")
  }

  getTwitchLive(): Observable<TwitchLive[]>{
    return this.http.get<TwitchLive[]>(URL_TWITCH_LIVE)
  }

  ajustTwitchLiveData(data:TwitchLive[]):TwitchLive[]{
    for(let i=0; i<data.length; i++){
      data[i].link = "https://twitch.tv/" + data[i].user_login
      let thumbnail_list = data[i].thumbnail_url.split('/')
      thumbnail_list.pop()
      let thumbnail = ""
      for(let j=0; j<thumbnail_list.length; j++){
        thumbnail += thumbnail_list[j] + "/"
      }
      thumbnail += "live_user_" + data[i].user_login + ".jpg"
      data[i].thumbnail_url = thumbnail
    }
    return data
  }

  redirectTwitch(url:string){
    window.location.href = url
  }

  getYoutubeChannels(){
    return this.http.get<YoutubeChannels[]>(URL_YOUTUBE_CHANNELS)
  }

  ngOnDestroy(): void {
    this.subscription_twitch_live.unsubscribe()
  }
}