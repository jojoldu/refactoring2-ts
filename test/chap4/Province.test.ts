import {Province} from "../../src/chap4/Province";
import {sampleProvinceData} from "./sampleProvinceData";

describe('Province', () => {
    let asia: Province;
    beforeEach(() => {
        asia = new Province(sampleProvinceData());
    });

    it('shortfall', () => {
        expect(asia.shortfall).toBe(5);
    });

    it('profit', () => {
        expect(asia.profit).toBe(230);
    });

    it('change production', () => {
        asia.producers[0].calculateProduction("20"); // TS라서 타입 Fix
        expect(asia.shortfall).toBe(-6);
        expect(asia.profit).toBe(292);
    });

    it('zero demand', () => {
        asia.demand = 0;
        expect(asia.shortfall).toBe(-25);
        expect(asia.profit).toBe(0);
    });

    it('negative demand', () => {
        asia.demand = -1;
        expect(asia.shortfall).toBe(-26);
        expect(asia.profit).toBe(-10);
    });

    it('string for producers', () => {
        const data = {
            name: "String producers",
            producers: "",
            demand: 30,
            price: 20
        }

        const prov = new Province(data);
        expect(prov.shortfall).toBe(0);

    });
});

describe('no producers', () => {
    let asia: Province;
    beforeEach(() => {
        const data = {
            name: "No producers",
            producers: [],
            demand: 30,
            price: 20
        }
        asia = new Province(data);
    });

    it('shortfall', () => {
        expect(asia.shortfall).toBe(30);
    });

    it('profit', () => {
        expect(asia.profit).toBe(0);
    });

    it('change production', () => {
        asia.producers[0].calculateProduction("20"); // TS라서 타입 Fix
        expect(asia.shortfall).toBe(-6);
        expect(asia.profit).toBe(292);
    });
});
