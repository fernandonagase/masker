import BitSequence from "./BitSequence";
import { ipToNumber, numberToIp } from "../util/IpUtils";

export const classBits: {[key: string]: number;} = {
    A: 8,
    B: 16,
    C: 24
};

export default class SubnetCalculator {
    _ipAddress: BitSequence;
    _subnetMask: BitSequence;
    _networkClass?: string;

    constructor(ipAddress: string, subnetMask: string, networkClass?: string) {
        this._ipAddress = new BitSequence(
            ipToNumber(ipAddress).toString(2).padStart(32, '0'),
            32
        );
        this._subnetMask = new BitSequence(
            ipToNumber(subnetMask).toString(2).padStart(32, '0'),
            32
        );
        if (networkClass) {
            this._networkClass = networkClass;
        }
    }

    get firstHostAddress() {
        const netAddressQuartets = this.subnetAddress.split('.');
        netAddressQuartets[3] = `${+netAddressQuartets[3] + 1}`;
        return netAddressQuartets.join('.');
    }

    get lastHostAddress() {
        const netAddressQuartets = this.broadcastAddress.split('.');
        netAddressQuartets[3] = `${+netAddressQuartets[3] - 1}`;
        return netAddressQuartets.join('.');
    }

    get hostAddressRange() {
        return `${this.firstHostAddress} - ${this.lastHostAddress}`;
    }

    get maxSubnets(): number {
        if (!this._networkClass) return 1;

        let maskBits = this._subnetMask.sequence;
        while (maskBits % 2 === 0) {
            maskBits = maskBits >>> 1;
        }

        return Math.trunc(2 ** ((Math.log(maskBits + 1)/Math.log(2)) - classBits[this._networkClass]));
    }

    get maxAddresses(): number {
        const hostBits = this._subnetMask.invert().sequence
            .toString(2).split('').length;

        return 2 ** hostBits;
    }

    get maxHosts(): number {
        return this.maxAddresses - 2;
    }

    get subnetAddress() {
        return numberToIp(this._ipAddress.and(this._subnetMask).sequence);
    }

    get broadcastAddress() {
        return numberToIp(this._ipAddress.or(
            new BitSequence((~this._subnetMask.sequence) >>> 0, 32)
        ).sequence);
    }
}