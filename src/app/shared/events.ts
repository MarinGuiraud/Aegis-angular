export class Events{
    title!:string
    adversaire!:string
    date!:string
    heure!:string
    liveName!:string
    link!:string

    constructor(
        title:string,
        adversaire:string,
        date:string,
        heure:string,
        liveName:string,
        link:string
    ){
        this.title = title
        this.adversaire = adversaire
        this.date = date
        this.heure = heure
        this.liveName = liveName
        this.link = link
    }
}