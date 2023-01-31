import { Component } from '@angular/core';
import { ToolsService } from '../pages/tools.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  deleteNotification(notification_id:string){
    let notif:any = document.getElementById(notification_id)
    notif.parentNode.removeChild(notif)
  }
}
