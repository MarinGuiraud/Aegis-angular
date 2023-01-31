export class ArticleParts{
    title!:string
    subtitle!:string
    content!:string[]
    image!:string
    video!:string
    tweet!:string

    constructor(
        title:string,
        subtitle:string,
        content:string[],
        image:string,
        video:string,
        tweet:string,
    ){
        this.title = title
        this.subtitle = subtitle
        this.content = content
        this.image = image
        this.video = video
        this.tweet = tweet
    }
}

export class ArticleInfo{
    title!:string;
    subtitle!:string;
    image!:string;
    link!:string
    dateOfCreation!:Date;

    constructor(
        title:string, 
        image:string,
        link:string,
        dateOfCreation:Date,
    ){
        this.title = title
        this.image = image
        this.link = link
        this.dateOfCreation = dateOfCreation
    }
}


export class Articles {
    infos!:ArticleInfo
    parts:ArticleParts[]

    constructor(
        infos:ArticleInfo,
        parts:ArticleParts[]
    ){
        this.infos = infos
        this.parts = parts
    }
}
