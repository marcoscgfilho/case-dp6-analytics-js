// Loads analytics.js library
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

// Creates tracker object and sends a pageview
ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

// Sends an event whenever the "Entre em Contato" link is clicked
let contactMenuLink = document.querySelector('a.menu-lista-contato');
contactMenuLink.addEventListener('click', () => {
  ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
});

// Sends an event whenever the "Download PDF" link is clicked
let downloadPDFLink = document.querySelector('a.menu-lista-download');
downloadPDFLink.addEventListener('click', () => {
  ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
});

// Sends an event whenever a card in "analise.html" is clicked
let cards = document.querySelectorAll('div.card.card-montadoras');
cards.forEach(card => card.addEventListener('click', event => ga('send', 'event', 'analise', 'ver_mais', event.currentTarget.dataset.name)));

// Sends an event whenever a form field is changed in "sobre.html"
let formFields = document.querySelectorAll('form.contato > ul > li > input');
formFields.forEach(field => field.addEventListener('change', event => ga('send', 'event', 'contato', event.target.id, 'preencheu')));

// Sends an event whenever the contact form in "sobre.html" is submitted
let bodyClassObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    let lightboxText = document.querySelector('div.lightbox > div.lightbox-header > span.lightbox-title').innerText;
    if (mutation.attributeName == 'class' && mutation.target.classList.contains('lightbox-open') && lightboxText.includes('enviado')) {
      ga('send', 'event', 'contato', 'enviado', 'enviado');
    }
  });
});
bodyClassObserver.observe(document.body, {attributes: true});