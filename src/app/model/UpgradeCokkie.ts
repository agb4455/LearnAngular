export class Upgrade {
    name: string;
    cokPerSec: number;
    img: string;
    cost: number;
    clickBonus: number;

    constructor(name: string, cokPerSec: number, img: string, cost: number, clickBonus: number = 0) {
        this.name = name;
        this.cokPerSec = cokPerSec;
        this.img = img;
        this.cost = cost;
        this.clickBonus = clickBonus;
    }
}