import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnDestroy{

  url_data:string = ""
  subscription_route_data:any

  firstname:string = ""
  lastname:string = ""
  email:string = ""
  object:string = ""
  message:string = ""

  constructor(private route:ActivatedRoute, private http:HttpClient){
    this.subscription_route_data = route.data.subscribe((routing_data) => {
      this.url_data = routing_data["url_data"]
    })
  }


  submitForm(){
    console.log("Dans la fonction sendEmail")
    let formData:any = JSON.stringify({
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      object:this.object,
      message:this.message
    })
    const options = {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:formData
    }
    console.log(formData)
    this.http.post(this.url_data + "/api/contact", options).subscribe((response) => {
    })
    // Ajouter une gestion de la réponse (WIP)
    alert("Votre mail est bien envoyé ! Bonne journée")
  }

  ngOnDestroy(): void {
    this.subscription_route_data.unsubscribe()
  }

}
