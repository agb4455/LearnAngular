export class Task{
    id: number;
    title: string
    description: string;
    state: TastState;

    constructor(id: number, title: string, description: string, state: TastState){
        this.id = id;
        this.title = title;
        this.description = description;
        this.state = state;
    }
}

export enum TastState{
    TODO = "To Do",
    IN_PROGRESS = "In Progress",
    DONE = "Done"
}