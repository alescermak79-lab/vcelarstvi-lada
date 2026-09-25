# Lesní med z Kačkovca – web včelaře Lády

Jednostránkový web pro objednávky lesního medu. Statické stránky
(HTML/CSS/JS), hostované na GitHub Pages.

## Soubory
- `index.html` – celý obsah stránky (příběh, nabídka, objednávka, o nás)
- `style.css` – vzhled
- `script.js` – mobilní menu + objednávkový formulář (mailto)
- `images/` – upravené fotky sklenic, favicon, QR platba

## Než web spustíte ostře
- **Kontakt:** v `index.html` (sekce O nás / patička) nahraďte
  `kontakt@doplnit.cz` a `+420 000 000 000` skutečnými údaji.
- **E-mail pro objednávky:** ve `script.js` proměnná
  `OBJEDNAVKY_EMAIL` – nastavte na skutečný e-mail.
- **Bankovní účet a QR kód:** v `index.html` (sekce O nás) je
  ukázkové číslo účtu `123456 7890 / 0300`. Skutečný QR kód pro
  platbu vygenerujte na https://api.paylibo.com/paylibo/generator/czech
  (nebo v bankovní appce) a nahraďte `images/qr-platba.png`.
- **Ceny a velikosti** sklenic (250 g / 500 g / 1 kg) jsou v sekci
  `#med` v `index.html` – klidně upravte podle aktuální sezóny.

## Nasazení (GitHub Pages)
Nastavení → Pages → Branch: `main`, složka `/ (root)`.
