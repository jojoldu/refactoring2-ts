import {htmlStatement, statement} from "../../src/chap1/statement";

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

    it('should print a statement for multiple plays, single customer and multiple seats in plain text', () => {
        let expected = "Statement for BigCo\n" +
            "  Hamlet: $650.00 (55 seats)\n" +
            "  As You Like It: $580.00 (35 seats)\n" +
            "  Othello: $500.00 (40 seats)\n" +
            "Amount owed is $1,730.00\n" +
            "You earned 47 credits\n";

        expect(statement(invoicesJson, playsJson)).toBe(expected);
    });

    it('should print a statement for multiple plays, single customer and multiple seats in html', () => {
        let result  = `<h1>Statement for BigCo</h1>\n`;
        result += "<table>\n";
        result += `<tr><th>play</th><th>seats</th><th>cost</th></tr>  <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>\n`;
        result += `  <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>\n`;
        result += `  <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>\n`;
        result += "</table>\n";
        result += `<p>Amount owed is <em>$1,730.00</em></p>\n`;
        result += `<p>You earned <em>47</em> credits</p>\n`;

        expect(htmlStatement(invoicesJson, playsJson)).toBe(result);
    });

    it("array slice", () => {
        const target = [1,2,3,4,5];
        const result = target.slice(0,3);
        expect(result).toHaveLength(3);
        expect(result).toStrictEqual([1,2,3]);
    });

    it("", () => {
        const data = {
            "receivers": [
                {
                    "to": "a",
                },
                {
                    "to": "b",
                }, {
                    "to": "c",
                }, {
                    "to": "d",
                }, {
                    "to": "e",
                },
            ],
        };

        const result = data.receivers
            .map(r => r.to)
            .splice(0, 3);

        expect(result).toHaveLength(3);
        expect(result[0]).toBe("a");
        expect(result[1]).toBe("b");
        expect(result[2]).toBe("c");

    });

});
