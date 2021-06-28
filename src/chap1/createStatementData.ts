import {TragedyCalculator} from "./calculator/TragedyCalculator";
import {ComedyCalculator} from "./calculator/ComedyCalculator";

export function createStatementData(invoice, plays) {
    const performances = invoice.performances.map(enhancePerformance);
    return {
        "customer": invoice.customer,
        "performances": performances,
        "totalVolumeCredits": totalVolumeCredits(performances) ,
        "totalAmount": totalAmount(performances)
    };

    function enhancePerformance(performance) {
        const calculator = createPerformanceCalculator(performance, playFor(performance));
        const result = Object.assign({}, performance);
        result.play = calculator.play
        result.amount = calculator.amount;
        result.volumeCredits = calculator.volumeCredits;
        return result;
    }

    function totalVolumeCredits(performances) {
        return performances.reduce((total, performance) => total + performance.volumeCredits, 0)
    }

    function totalAmount(performances) {
        return performances.reduce((total, performance) => total + performance.amount, 0)
    }

    function playFor(performance) {
        return plays[performance.playID];
    }
}

function createPerformanceCalculator(performance, play) {
    switch (play.type) {
        case "tragedy":
            return new TragedyCalculator(performance, play);
        case "comedy" :
            return new ComedyCalculator(performance, play);
        default:
            throw new Error(`unknown type: ${play.type}`);
    }
}


