import {PerformanceCalculator} from "./PerformanceCalculator";

export class ComedyCalculator extends PerformanceCalculator {
    get amount() {
        let result = 30000;
        if (this.performance.audience > 20) {
            result += 10000 + 500 * (this.performance.audience - 20);
        }
        result += 300 * this.performance.audience;
        return result;
    }

    get volumeCredits() {
        let volumeCredits = Math.max(this.performance.audience - 30, 0);
        // add extra credit for every ten comedy attendees
        volumeCredits += Math.floor(this.performance.audience / 5);
        return volumeCredits
    }
}
