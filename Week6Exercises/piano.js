export class Piano {
    type = "Grand Piano";
    #color = "Black";

    getDescription() {
        return `This is a ${this.type}.`;
    }

    practice() {
        return "Practicing piano scales and playing songs.";
    }
};
