export class Character{
    name:String;
    raza:raza;
    poder:number;
    imagen:string;
    constructor(nombre:string, raza:raza, poder:number, imagen:string){
        this.name=nombre;
        this.raza=raza;
        this.poder=poder;
        this.imagen=imagen;
    }
}

export enum raza{
    horco="#228B22",
    enano="#FCD0B4",
    elfo="#ADD8E6",
    hada="#FFB6C1"   
}