export class Plant {
    private numOfLeaves: number;
    private color: string;
    private hasFlowers: boolean;
    photosynthesizes: boolean;

    constuctor(numOfLeaves: number, color: string, hasFlowers: boolean, photosynthesizes: boolean) {
        this.numOfLeaves = numOfLeaves;
        this.color = color;
        this.hasFlowers = hasFlowers;
        this.photosynthesizes = photosynthesizes;
    }

    declareNumOfLeaves(userNumOfLeaves: number): string {
        this.numOfLeaves = userNumOfLeaves;
        return "This plant has" + userNumOfLeaves + "leaves!";
    }
}

