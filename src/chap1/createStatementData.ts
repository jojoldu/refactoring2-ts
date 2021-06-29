import {TragedyCalculator} from "./calculator/TragedyCalculator";
import {ComedyCalculator} from "./calculator/ComedyCalculator";
import {Performance} from "./Performance";

export function createStatementData(invoice, plays) {
    const performances = invoice.performances
        .map(performance => enhancePerformance(new Performance(performance.playID, performance.audience), plays));

    return {
        "customer": invoice.customer,
        "performances": performances,
        "totalVolumeCredits": totalVolumeCredits(performances) ,
        "totalAmount": totalAmount(performances)
    };

    function totalVolumeCredits(performances) {
        return performances.reduce((total, performance) => total + performance.volumeCredits, 0)
    }

    function totalAmount(performances) {
        return performances.reduce((total, performance) => total + performance.amount, 0)
    }
}

export function enhancePerformance(performance: Performance, plays) {
    const calculator = createPerformanceCalculator(performance, plays[performance.playID]);
    return performance.enhance(calculator.play, calculator.amount, calculator.volumeCredits);
}

export function createPerformanceCalculator(performance, play) {
    switch (play.type) {
        case "tragedy":
            return new TragedyCalculator(performance, play);
        case "comedy" :
            return new ComedyCalculator(performance, play);
        default:
            throw new Error(`unknown type: ${play.type}`);
    }
}


