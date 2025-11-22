export class Achievement {
    id: string;
    name: string;
    description: string;
    icon: string;
    unlocked: boolean;
    requirement: () => boolean;

    constructor(
        id: string,
        name: string,
        description: string,
        icon: string = "🏆",
        requirement: () => boolean
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.unlocked = false;
        this.requirement = requirement;
    }
}
