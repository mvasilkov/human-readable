'use strict'

const { toFixed } = require('./helpers')

const units = {
    decimal: [
        [1000 ** 5, 'P'],
        [1000 ** 4, 'T'],
        [1000 ** 3, 'G'],
        [1000 ** 2, 'M'],
        [1000 ** 1, 'K'],
    ],
    binary: [
        [1024 ** 5, 'Pi'],
        [1024 ** 4, 'Ti'],
        [1024 ** 3, 'Gi'],
        [1024 ** 2, 'Mi'],
        [1024 ** 1, 'Ki'],
    ],
}

function formatSize(n, { binary, decimalPlaces = 2, keepTrailingZeros } = {}) {
    let sign = ''
    if (n < 0) {
        sign = '−'
        n = -n
    }
    for (const [divider, symbol] of binary ? units.binary : units.decimal) {
        if (n >= divider) {
            const ns = toFixed(n / divider, { decimalPlaces, keepTrailingZeros })
            return `${sign}${ns} ${symbol}B`
        }
    }
    return `${sign}${n} ${n == 1 ? 'byte' : 'bytes'}`
}

module.exports = { formatSize }
