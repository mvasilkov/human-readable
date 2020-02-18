human-readable
===

Presenting values in human-readable form.

[![npm][npm-badge]][npm-url]
[![no dependencies][dependencies-badge]][dependencies-url]

---

Installation
---

```sh
npm add human-readable
```

Usage
---

```javascript
import { sizeFormatter } from 'human-readable'

const format = sizeFormatter({
    std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

format(4096) // '4 KB'

const defaults = sizeFormatter()

defaults(4096) // '4.1 kB'
```

Disk size units
---

| Decimal | [SI][si] | Binary | [IEC][iec] | [JEDEC][jedec]
| --- | --- | --- | --- | ---
| (10<sup>3</sup>)<sup>1</sup> | kB | (2<sup>10</sup>)<sup>1</sup> | KiB | KB
| (10<sup>3</sup>)<sup>2</sup> | MB | (2<sup>10</sup>)<sup>2</sup> | MiB | MB
| (10<sup>3</sup>)<sup>3</sup> | GB | (2<sup>10</sup>)<sup>3</sup> | GiB | GB
| (10<sup>3</sup>)<sup>4</sup> | TB | (2<sup>10</sup>)<sup>4</sup> | TiB | TB
| (10<sup>3</sup>)<sup>5</sup> | PB | (2<sup>10</sup>)<sup>5</sup> | PiB | PB

[npm-badge]: https://img.shields.io/npm/v/human-readable.svg?style=flat
[npm-url]: https://www.npmjs.com/package/human-readable
[dependencies-badge]: https://img.shields.io/david/mvasilkov/human-readable?style=flat
[dependencies-url]: https://www.npmjs.com/package/human-readable?activeTab=dependencies
[iec]: http://www.electropedia.org/iev/iev.nsf/display?openform&ievref=112-01-27
[si]: http://www.electropedia.org/iev/iev.nsf/display?openform&ievref=112-02-03
[jedec]: https://www.jedec.org/standards-documents/dictionary/terms/kilo-k-prefix-units-semiconductor-storage-capacity
