export class Upgrade {
    name: String;
    cokPerSec: number;
    img: String;
    cost: number;

    constructor(name: string, cokPerSec: number, img: String, cost: number = 10) {
        this.name = name;
        this.cokPerSec = cokPerSec;
        this.img = img;
        this.cost = cost;
    }
}