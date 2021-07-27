import {Province} from "./Province";

export class Producer {
    private _province: Province;
    private _cost: number;
    private _name: string;
    private _production: number;

    constructor(province: Province, data) {
        this._province = province;
        this._cost = data.cost;
        this._name = data.name;
        this._production = data.production || 0;
    }

    calculateProduction(amountStr: string) {
        const amount = parseInt(amountStr);
        const newProduction = Number.isNaN(amount)? 0: amount;

        this._province.addTotalProduction(newProduction - this._production);
        this._production = newProduction;
    }

    get province(): Province {
        return this._province;
    }

    get cost(): number {
        return this._cost;
    }

    get name(): string {
        return this._name;
    }

    get production(): number {
        return this._production;
    }


}
