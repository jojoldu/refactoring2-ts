import {Performance} from "./Performance";

export class Invoice {
    customer: string;
    performances: Performance[]

    constructor(customer: string, performances: Performance[]) {
        this.customer = customer;
        this.performances = performances;
    }

    static of (invoiceJson) : Invoice {
        return new Invoice(invoiceJson.customer, invoiceJson.performances);
    }
}
