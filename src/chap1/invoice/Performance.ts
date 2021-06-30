import {PerformanceCalculator} from "../calculator/PerformanceCalculator";
import {TragedyCalculator} from "../calculator/TragedyCalculator";
import {ComedyCalculator} from "../calculator/ComedyCalculator";

export class Performance {
    public playID: string;
    public audience: number;
    public play: object;
    public amount: number;
    public volumeCredits: number;

    constructor(playID: string, audience: number) {
        this.playID = playID;
        this.audience = audience;
    }

    enhance (play): Performance {
        const calculator = this._createPerformanceCalculator(play);
        const copy = new Performance(this.playID, this.audience);
        copy.play = calculator.play;
        copy.amount = calculator.amount;
        copy.volumeCredits = calculator.volumeCredits;
        return copy;
    }

    _createPerformanceCalculator(play): PerformanceCalculator {
        switch (play.type) {
            case "tragedy":
                return new TragedyCalculator(this, play);
            case "comedy":
                return new ComedyCalculator(this, play);
            default:
                throw new Error(`unknown type: ${play.type}`);
        }
    }
}
