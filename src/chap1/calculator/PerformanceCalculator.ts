export abstract class PerformanceCalculator {
    public performance: any;
    public play: any;

    constructor(performance, play) {
        this.performance = performance;
        this.play = play;
    }

    abstract get amount();
    abstract get volumeCredits();
}
