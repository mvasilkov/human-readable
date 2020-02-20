'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// const ACTUAL_YEAR_DAYS = 365.242199
const GREGORIAN_YEAR_DAYS = 365.242500;
const DUR_MS = 1;
const DUR_S = 1000 * DUR_MS;
const DUR_M = 60 * DUR_S;
const DUR_H = 60 * DUR_M;
const DUR_D = 24 * DUR_H;
const DUR_W = 7 * DUR_D;
const DUR_MO = GREGORIAN_YEAR_DAYS / 12 * DUR_D;
const DUR_Y = GREGORIAN_YEAR_DAYS * DUR_D;
const Units = [
    ['Y', DUR_Y],
    ['MO', DUR_MO],
    ['W', DUR_W],
    ['D', DUR_D],
    ['H', DUR_H],
    ['M', DUR_M],
    ['S', DUR_S],
    ['MS', DUR_MS],
];
const defaultOptions = {
    allowMultiples: ['Y', 'MO', 'D', 'H', 'M', 'S'],
    render(parts) {
        return parts.map(({ literal, symbol }) => `${literal}${symbol.toLowerCase()}`).join(' ');
    },
};
function durationFormatter(options) {
    const opt = Object.assign({}, defaultOptions, options);
    const allowMultiples = new Set;
    opt.allowMultiples.forEach(a => {
        allowMultiples.add(a.toUpperCase());
    });
    return function (n) {
        const parts = [];
        const short = { literal: '0', symbol: 'MS' };
        for (const [a, b] of Units) {
            if (allowMultiples.has(a)) {
                if (n >= b) {
                    parts.push({ literal: '' + Math.floor(n / b), symbol: a });
                    n %= b;
                }
                else if (!parts.length) {
                    short.symbol = a;
                }
            }
        }
        return opt.render(parts.length ? parts : [short]);
    };
}
exports.durationFormatter = durationFormatter;
