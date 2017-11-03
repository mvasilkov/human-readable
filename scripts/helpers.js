function toFixed(n, { decimalPlaces = 2, keepTrailingZeros } = {}) {
    const a = (+n).toFixed(decimalPlaces)
    if (keepTrailingZeros) return a
    return a.replace(/\.?0+$/, '')
}

module.exports = { toFixed }
