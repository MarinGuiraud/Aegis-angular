import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  
  getGameNameFromUrl(url:string):string{
    console.log(url)
    if(url.includes("tft")){
      return "TFT"
    }
    return "League of Legends"
  }


}
