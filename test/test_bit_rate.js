import { formatBitRate } from '../scripts/bit_rate'
import test from 'ava'

test('formatBitRate', t => {
    t.is(formatBitRate(0), '0 bps')
    t.is(formatBitRate(1), '1 bps')
    t.is(formatBitRate(24), '24 bps')
    t.is(formatBitRate(1000), '1 Kbps')
    t.is(formatBitRate(1024, { binary: 1 }), '1 Kibps')
    t.is(formatBitRate(1024), '1.02 Kbps')
    t.is(formatBitRate(1024, { decimalPlaces: 3 }), '1.024 Kbps')

    /* negative */
    t.is(formatBitRate(-1), '−1 bps')
    t.is(formatBitRate(-16), '−16 bps')
    t.is(formatBitRate(-1e10), '−10 Gbps')

    /* binary */
    const n = Math.floor(Math.random() * 1000)
    t.is(formatBitRate(1024 ** 1 * n, { binary: 1 }), `${n} Kibps`)
    t.is(formatBitRate(1024 ** 2 * n, { binary: 1 }), `${n} Mibps`)
    t.is(formatBitRate(1024 ** 3 * n, { binary: 1 }), `${n} Gibps`)
    t.is(formatBitRate(1024 ** 4 * n, { binary: 1 }), `${n} Tibps`)
    t.is(formatBitRate(1024 ** 5 * n, { binary: 1 }), `${n} Pibps`)

    /* decimal */
    t.is(formatBitRate(1000 ** 1 * n), `${n} Kbps`)
    t.is(formatBitRate(1000 ** 2 * n), `${n} Mbps`)
    t.is(formatBitRate(1000 ** 3 * n), `${n} Gbps`)
    t.is(formatBitRate(1000 ** 4 * n), `${n} Tbps`)
    t.is(formatBitRate(1000 ** 5 * n), `${n} Pbps`)
})
