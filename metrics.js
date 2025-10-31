(function(){
  function track(eventName, props){
    try {
      if (window.plausible) {
        window.plausible(eventName, { props: props || {} });
      } else if (window.gtag) {
        window.gtag('event', eventName, props || {});
      } else {
        console.info('[metrics]', eventName, props || {});
      }
    } catch (e) {
      console.warn('metrics error:', e);
    }
  }

  // Botões de planos (classe .contratar e data-plan)
  document.querySelectorAll('.contratar').forEach(function(btn){
    btn.addEventListener('click', function(){
      var plan = this.getAttribute('data-plan') || 'Indefinido';
      track('clicou_contratar', { plan: plan });
    });
  });

  // Clique em e-mail
  document.querySelectorAll('a[href^="mailto:"]').forEach(function(a){
    a.addEventListener('click', function(){
      track('clicou_email', { href: a.getAttribute('href') });
    });
  });

  // Clique em links do WhatsApp
  document.querySelectorAll('a[href*="wa.me"]').forEach(function(a){
    a.addEventListener('click', function(){
      track('clicou_whatsapp', { href: a.getAttribute('href') });
    });
  });

  // Viu a seção Planos
  var planos = document.querySelector('#planos');
  if (planos && 'IntersectionObserver' in window) {
    var visto = false;
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (!visto && en.isIntersecting) {
          visto = true;
          track('viu_planos', { percentView: Math.round(en.intersectionRatio * 100) });
          io.disconnect();
        }
      });
    }, { threshold: [0.25] });
    io.observe(planos);
  }
})();
