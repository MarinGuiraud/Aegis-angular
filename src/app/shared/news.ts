export class News {
    title!:string;
    subtitle!:string;
    image!:string;
    link!:string
    dateOfCreation!:Date;

    constructor(
        title:string, 
        subtitle:string,
        image:string,
        link:string,
        dateOfCreation:Date
    ){
        this.title = title
        this.subtitle = subtitle
        this.image = image
        this.link = link
        this.dateOfCreation = dateOfCreation
    }
}
