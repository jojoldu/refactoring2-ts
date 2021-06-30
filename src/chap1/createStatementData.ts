import {TragedyCalculator} from "./calculator/TragedyCalculator";
import {ComedyCalculator} from "./calculator/ComedyCalculator";
import {Performance} from "./invoice/Performance";
import {Invoice} from "./invoice/Invoice";

export function createStatementData(invoice: Invoice, plays) {
    const performances = invoice.performances
        .map(performance => new Performance(performance.playID, performance.audience)
            .enhance(plays[performance.playID]));

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

export function createPerformanceCalculator(performance, play) {
    switch (play.type) {
        case "tragedy":
            return new TragedyCalculator(performance, play);
        case "comedy":
            return new ComedyCalculator(performance, play);
        default:
            throw new Error(`unknown type: ${play.type}`);
    }
}


