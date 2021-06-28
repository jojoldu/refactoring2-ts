import {createStatementData} from "../../src/chap1/createStatementData";

describe('statement', () => {
    let playsJson =
        {
            "hamlet": {"name": "Hamlet", "type": "tragedy"},
            "as-like": {"name": "As You Like It", "type": "comedy"},
            "othello": {"name": "Othello", "type": "tragedy"}
        };

    let invoicesJson =
        {
            "customer": "BigCo",
            "performances": [
                {
                    "playID": "hamlet",
                    "audience": 55
                },
                {
                    "playID": "as-like",
                    "audience": 35
                },
                {
                    "playID": "othello",
                    "audience": 40
                }
            ]
        };

    it("statementData", () => {
        const result = createStatementData(invoicesJson, playsJson);

        expect(result.totalAmount).toEqual(173000);
        expect(result.totalVolumeCredits).toEqual(47);

    });


});
