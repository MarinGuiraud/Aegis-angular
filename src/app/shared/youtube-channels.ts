export class YoutubeChannels {
    name!:string;
    image!:string;
    background_image!:string
    link!:string;
    tag!:string;

    constructor(
        name:string,
        image:string,
        background_image:string,
        link:string,
        tag:string
    ){
        this.name = name
        this.image = image
        this.background_image = background_image
        this.link = link
        this.tag = tag
    }
}
