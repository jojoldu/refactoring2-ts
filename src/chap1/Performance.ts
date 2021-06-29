export class Performance {
    public playID: string;
    public audience: number;
    public play: object;
    public amount: number;
    public volumeCredits: number;

    constructor(playID: string, audience: number) {
        this.playID = playID;
        this.audience = audience;
    }

    enhance (play, amount, volumeCredits): Performance {
        const copy = new Performance(this.playID, this.audience);
        copy.play = play;
        copy.amount = amount;
        copy.volumeCredits = volumeCredits;
        return copy;
    }
}
