import {Producer} from "./Producer";

export class Province {
    private _name: string;
    private _producers: Producer[];
    private _totalProduction: number;
    private _demand: number;
    private _price: number;

    constructor(doc) {
        this._name = doc.name;
        this._producers = [];
        this._totalProduction = 0;
        this._demand = doc.demand;
        this._price = doc.price;
        doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
    }

    private addProducer(arg) {
        this._producers.push(arg);
        this._totalProduction += arg.production;
    }

    addTotalProduction(value: number) {
        this._totalProduction += value;
    }

    set demand(value: number) {
        this._demand = value;
    }

    set price(value: number) {
        this._price = value;
    }

    get shortfall() {
        return this._demand - this._totalProduction;
    }

    get profit() {
        return this.demandValue - this.demandCost;
    }

    get demandValue() {
        return this.satisfiedDemand * this._price;
    }

    get satisfiedDemand() {
        return Math.min(this._demand, this._totalProduction);
    }

    get demandCost() {
        let remainingDemand = this._demand;
        let result = 0;
        this._producers
            .sort((a,b) => a.cost - b.cost)
            .forEach(p => {
                const contribution = Math.min(remainingDemand, p.production);
                remainingDemand -= contribution;
                result += contribution * p.cost;
            });
        return result;
    }

    get producers(): Producer[] {
        return this._producers;
    }
}
