# ArchiveOS website

Open `index.html` in a browser. No build step, framework, external fonts or CDN is
required. Upload the contents of this folder to the GitHub Pages repository root
to publish it. This delivery has not been published.

The redesign keeps the original site's Turkish/English copy, four performance
features, minimum/recommended requirements, included software, seven FAQs,
download section, GitHub link, copyright and both GPLv3 text versions. The original
site was retrieved from https://archive-os.github.io/ on 2026-10-06.

`assets/desktop.png` is the dark desktop screenshot; `assets/desktop-2.png` is
the light desktop screenshot. The hero selects its image to match the theme.
The six toolkit entries and contact links reflect the ArchiveOS applications and
contacts supplied by the project owner. Their logos are copied from our packages.

The style follows the ArchiveOS applications: pale blue accents, neutral cards,
light/dark themes, and Turkish/English. Browser language selects Turkish for `tr`
and English otherwise. Each page load follows the browser language; the language
button switches the current page temporarily. Each page load
follows the browser’s light/dark preference; browser preference changes also update
the site. The theme button switches the current page temporarily. FAQ accordions, mobile navigation, keyboard-accessible license dialog
and screenshot enlargement are included. Reduced motion is respected.

## Files

- `index.html`: page structure
- `style.css`: responsive light/dark layout
- `content.js`: original bilingual text, FAQs and license texts
- `app.js`: language/theme/navigation/dialog interactions
- `assets/`: local screenshots and ArchiveOS logos

The original performance claims are preserved as site content; they have not
been independently benchmarked. Download availability beyond the existing link
was not tested. Existing GPL text is copied as provided, without legal editing.

## New ISO release

At the top of `content.js`, fill the two empty `archiveosRelease` values:

```js
const archiveosRelease = {
  isoUrl: '', // New ISO download URL
  sha256: ''  // SHA256 of that same ISO (64 hexadecimal characters)
};
```

The ISO link and checksum are displayed in both languages. Download buttons use
the same URL. Until a URL is set, the hero button goes to the download section and
the final download button is inactive; the previous ISO link is removed.
The touch keyboard description is available in Turkish and English.

Place the second screenshot at `assets/desktop-2.png`. It appears automatically;
if missing, the translated unavailable-image card remains visible.

## ISO bağlantısı ve SHA256 nereye yazılır?

`content.js` dosyasının en başında, 3. satırdaki `isoUrl` alanının boş tırnaklarına indirme bağlantısını; 4. satırdaki `sha256` alanının boş tırnaklarına aynı ISO’nun 64 karakterli SHA256 değerini yapıştırın. Bu değerler sitedeki indirme bölümünde gösterilir; tüm indirme düğmeleri aynı bağlantıyı kullanır. Ardından sayfayı yenileyin.

## Aqurevive iş birliği

Logoyu `assets/aqurevive.png` adıyla koyun. `content.js` dosyasının en başındaki
`archiveosPartners.aqureviveUrl` boş tırnaklarına Aqurevive site adresini yazın:

```js
const archiveosPartners = {
  aqureviveUrl: 'https://SITE-ADRESI'
};
```

Sayfayı yenileyin. “Şimdi ziyaret et” / “Visit now” düğmesi adresi yeni sekmede açar.
Adres boş veya geçersizken düğme pasiftir. Logo eksikse Aqurevive adı gösterilir.
