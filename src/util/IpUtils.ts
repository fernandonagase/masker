export const numberToIp = (sequence: number) => {
    const bitSequence = sequence.toString(2).padStart(32, '0');
    let quartets: number[] = [];
    for (let i = 0; i < 4; ++i) {
        const begin = i * 8;
        const quartet = bitSequence.slice(begin, begin + 8);
        quartets = [...quartets, parseInt(quartet, 2)];
    }
    return quartets.join('.');
};

export const ipToNumber = (ipAddress: string) => {
    const quartets = ipAddress.split('.').map((quartet) => {
        const decimalQuartet = +quartet;
        return decimalQuartet <= 255 ? decimalQuartet : 255;
    });
    return quartets
        .map((_quartet, index) => quartets[quartets.length - 1 - index])
        .reduce((acc, quartet, index) => {
            return acc + ((quartet << (8 * index)) >>> 0);
        });
}