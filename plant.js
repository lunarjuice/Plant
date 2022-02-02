var Plant = /** @class */ (function () {
    function Plant() {
    }
    Plant.prototype.constuctor = function (numOfLeaves, color, hasFlowers, photosynthesizes) {
        this.numOfLeaves = numOfLeaves;
        this.color = color;
        this.hasFlowers = hasFlowers;
        this.photosynthesizes = photosynthesizes;
    };
    Plant.prototype.declareNumOfLeaves = function (userNumOfLeaves) {
        this.numOfLeaves = userNumOfLeaves;
        return "This plant has" + userNumOfLeaves + "leaves!";
    };
    return Plant;
}());
