export default class BitSequence {
    sequence: number;
    length: number;

    constructor(sequence: (string | number), length?: number) {
        this.length = length && length > 0 && length <= 64 ? length : 8;

        if (typeof(sequence) === 'number') {
            this.sequence = sequence;
            return;
        }

        const binaryRegex = new RegExp(`[0,1]{1,${this.length}}`);
        if (!binaryRegex.test(sequence)) {
            this.sequence = 0;
            return;
        }

        this.sequence = parseInt(sequence, 2);
    }

    getFullSequence() {
        return this.sequence.toString(2).padStart(this.length, '0');
    }

    invert() {
        return new BitSequence((~this.sequence) >>> 0, this.length);
    }

    and(other: BitSequence) {
        return new BitSequence((this.sequence & other.sequence) >>> 0, this.length);
    }

    or (other: BitSequence) {
        return new BitSequence((this.sequence | other.sequence) >>> 0, this.length);
    }
}