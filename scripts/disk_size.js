'use strict'

const { toFixed } = require('./helpers')

const units = {
    decimal: [
        [1000 ** 5, 'PB'],
        [1000 ** 4, 'TB'],
        [1000 ** 3, 'GB'],
        [1000 ** 2, 'MB'],
        [1000 ** 1, 'KB'],
    ],
    binary: [
        [1024 ** 5, 'PiB'],
        [1024 ** 4, 'TiB'],
        [1024 ** 3, 'GiB'],
        [1024 ** 2, 'MiB'],
        [1024 ** 1, 'KiB'],
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
            return `${sign}${ns} ${symbol}`
        }
    }
    return `${sign}${n} ${n == 1 ? 'byte' : 'bytes'}`
}

module.exports = { formatSize }
