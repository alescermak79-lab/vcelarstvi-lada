// Rok v patičce
document.getElementById('rok').textContent = new Date().getFullYear();

// Mobilní menu
var toggle = document.getElementById('navToggle');
var nav = document.getElementById('siteNav');
toggle.addEventListener('click', function () {
  var open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Tlačítka "Objednat" u jednotlivých velikostí -> předvyplní formulář
var velikostSelect = document.getElementById('velikostSelect');
document.querySelectorAll('.order-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    velikostSelect.value = btn.dataset.size;
    document.getElementById('objednavka').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('input[name="jmeno"]').focus({ preventScroll: true });
  });
});

// TODO: nahraďte e-mailem včelaře Lády
var OBJEDNAVKY_EMAIL = 'kontakt@doplnit.cz';

// Objednávkový formulář -> otevře připravený e-mail (mailto)
document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var f = e.target;
  var jmeno = f.jmeno.value.trim();
  var kontakt = f.kontakt.value.trim();
  var velikost = f.velikost.value;
  var pocet = f.pocet.value;
  var predani = f.predani.value;
  var poznamka = f.poznamka.value.trim();

  var subject = 'Objednávka medu – ' + jmeno;
  var body =
    'Jméno: ' + jmeno + '\n' +
    'Kontakt: ' + kontakt + '\n' +
    'Velikost sklenice: ' + velikost + '\n' +
    'Počet kusů: ' + pocet + '\n' +
    'Způsob předání: ' + predani + '\n' +
    (poznamka ? 'Poznámka: ' + poznamka + '\n' : '');

  var mailto =
    'mailto:' + OBJEDNAVKY_EMAIL +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body);

  window.location.href = mailto;
});
