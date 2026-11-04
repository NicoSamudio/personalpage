'use strict';
(() => {
  const cfg = window.PORTFOLIO_CONFIG || {};
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);
  const year = $('#current-year');
  if (year) year.textContent = new Date().getFullYear();
  const menu = $('#menu-toggle');
  const nav = $('#main-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(isOpen));
      menu.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded','false');
    }));
  }
  let toastTimeout;
  const toast = $('#toast');
  function announce(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => toast.classList.remove('show'), 4500);
  }
  const contacts = [
    { selector: '.js-email', value: cfg.email, href: v => 'mailto:' + v, name: 'email' },
    { selector: '.js-gmail', value: cfg.email, href: v => 'mailto:' + v, name: 'email' },
    { selector: '.js-linkedin', value: cfg.linkedin, href: v => v, name: 'LinkedIn' },
    { selector: '.js-whatsapp', value: cfg.whatsapp, href: v => 'https://wa.me/' + v.replace(/\D/g, ''), name: 'WhatsApp' },
    { selector: '.js-github', value: cfg.github, href: v => v, name: 'GitHub' },
  ];
  contacts.forEach(({selector,value,href,name}) => {
    $$(selector).forEach(link => {
      if (typeof value === 'string' && value.trim()) {
        link.href = href(value.trim());
        if (name === 'LinkedIn' || name === 'WhatsApp' || name === 'GitHub') {
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
        }
      } else {
        link.href = '#contacto';
        link.addEventListener('click', e => {
          e.preventDefault();
          announce(`Falta configurar ${name} en el archivo config.js.`);
        });
      }
    });
  });
})();
