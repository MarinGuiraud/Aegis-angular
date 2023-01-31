export class TwitchLive {
    id!:number;
    user_id!:number;
    user_login!:string;
    user_name!:string;
    game_id!:number;
    game_name!:string;
    type!:string;
    title!:string;
    viewer_count!:number;
    started_at!:Date;
    language!:string;
    thumbnail_url!:string;
    link!:string

    constructor(
        id:number,
        user_id:number,
        user_login:string,
        user_name:string,
        game_id:number,
        game_name:string,
        type:string,
        title:string,
        viewer_count:number,
        started_at:Date,
        language:string,
        thumbnail_url:string,
    ){
        this.id = id
        this.user_id = user_id
        this.user_login = user_login
        this.user_name = user_name
        this.game_id = game_id
        this.game_name = game_name
        this.type = type
        this.title = title
        this.viewer_count = viewer_count
        this.started_at = started_at
        this.language = language
        this.thumbnail_url = thumbnail_url
        this.link = ""
    }
}