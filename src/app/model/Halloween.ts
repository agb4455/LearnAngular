export enum invitationType{
    Humano = "Humano",
    Fantasma = "Fantasma",
    Vampiro = "Vampiro",
    Brujo = "Brujo"
}

export class halloweenRegistration{
    email:String;
    name:String;
    type:invitationType;
    costume:String;
    enterDate:Date;
    aceptTerms:boolean;

    constructor(email:String,
                name:String,
                type:String,
                costume:String,
                enterDate:Date,
                aceptTerms:boolean,){
        this.name=name;
        this.costume=costume;
        this.email=email;
        this.aceptTerms=aceptTerms;
        this.enterDate=enterDate;
        this.type=this.setType(type);
    }

    setType(type:String) : invitationType{
        if(type === invitationType.Brujo){
            return invitationType.Brujo
        }else if(type === invitationType.Fantasma){
            return invitationType.Fantasma
        }else if(type === invitationType.Humano){
            return invitationType.Humano
        }
        return invitationType.Vampiro
    }
}