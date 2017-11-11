'use strict'

const { toFixed } = require('./helpers')

const prefices = {
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

function formatSizeBase(n, { binary, decimalPlaces = 2, keepTrailingZeros } = {}) {
    let sign = ''
    if (n < 0) {
        sign = '−'
        n = -n
    }
    for (const [divider, prefix] of binary ? prefices.binary : prefices.decimal) {
        if (n >= divider) {
            const repr = toFixed(n / divider, { decimalPlaces, keepTrailingZeros })
            return [sign, repr, prefix]
        }
    }
    return [sign, '' + n, '']
}

function formatSize(n, options = {}) {
    const [sign, repr, prefix] = formatSizeBase(n, options)
    if (prefix) {
        return `${sign}${repr} ${prefix}B`
    }
    return `${sign}${repr} ${repr == '1' ? 'byte' : 'bytes'}`
}

module.exports = { formatSizeBase, formatSize }
