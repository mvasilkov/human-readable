'use strict'

const { formatSizeBase } = require('./disk_size')

function formatBitRate(n, options = {}) {
    const [sign, repr, prefix] = formatSizeBase(n, options)
    return `${sign}${repr} ${prefix}bps`
}

module.exports = { formatBitRate }
