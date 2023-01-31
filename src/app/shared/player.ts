export class PlayerPalmares{
    name!:string;
    classement!:number
    date!:string;

    constructor(
        name:string,
        classement:number,
        date:string
    ){
        this.name = name
        this.classement = classement
        this.date = date
    }
}

export class Player {
    role!:string;
    name!:string;
    image!:string;
    description!:string[];
    palmares!:PlayerPalmares[]
    tags!:string[];

    constructor(
        role:string,
        name:string,
        image:string,
        description:string[],
        palmares:PlayerPalmares[],
        tags:string[]
    ){
        this.role = role
        this.name = name
        this.image = image
        this.description = description
        this.palmares = palmares
        this.tags = tags
    }
}