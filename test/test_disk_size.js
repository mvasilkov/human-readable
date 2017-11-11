import { formatSize } from '../scripts/disk_size'
import test from 'ava'

test('formatSize', t => {
    t.is(formatSize(0), '0 bytes')
    t.is(formatSize(1), '1 byte')
    t.is(formatSize(24), '24 bytes')
    t.is(formatSize(1000), '1 KB')
    t.is(formatSize(1024, { binary: 1 }), '1 KiB')
    t.is(formatSize(1024), '1.02 KB')
    t.is(formatSize(1024, { decimalPlaces: 3 }), '1.024 KB')

    /* negative */
    t.is(formatSize(-1), '−1 byte')
    t.is(formatSize(-16), '−16 bytes')
    t.is(formatSize(-1e10), '−10 GB')

    /* binary */
    const n = Math.floor(Math.random() * 1000)
    t.is(formatSize(1024 ** 1 * n, { binary: 1 }), `${n} KiB`)
    t.is(formatSize(1024 ** 2 * n, { binary: 1 }), `${n} MiB`)
    t.is(formatSize(1024 ** 3 * n, { binary: 1 }), `${n} GiB`)
    t.is(formatSize(1024 ** 4 * n, { binary: 1 }), `${n} TiB`)
    t.is(formatSize(1024 ** 5 * n, { binary: 1 }), `${n} PiB`)

    /* decimal */
    t.is(formatSize(1000 ** 1 * n), `${n} KB`)
    t.is(formatSize(1000 ** 2 * n), `${n} MB`)
    t.is(formatSize(1000 ** 3 * n), `${n} GB`)
    t.is(formatSize(1000 ** 4 * n), `${n} TB`)
    t.is(formatSize(1000 ** 5 * n), `${n} PB`)
})
