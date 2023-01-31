export class Teams{
    name!:string;
    image!:string;
    position!:number;
    scores!:number[]
}

export class Tournament {
    name!:string;
    colonnes!:string[];
    teams!:Teams[];
}