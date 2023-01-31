export class Guides{
    title!:string
    subtitle!:string
    set!:string
    patch!:string
    approved!:string
    background_image!:string
    images!:string[]
    
    constructor(
        title:string,
        subtitle:string,
        set:string,
        patch:string,
        approved:string,
        background_image:string,
        images:string[]
    ){
        this.title = title
        this.subtitle = subtitle
        this.set = set
        this.patch = patch
        this.approved = approved
        this.background_image = background_image
        this.images = images
    }
}

export class GuidesData{
    set!:number
    guides!:Guides[]
    
    constructor(
        set:number,
        guides:Guides[]
    ){
        this.set = set
        this.guides = guides
    }
}
