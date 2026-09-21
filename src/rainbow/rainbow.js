export function rainbow(el) {
  el.setAttribute('aria-label', el.textContent);
  el.replaceChildren(
    ...[...el.textContent].map((c, i) => {
      const span = document.createElement('span');
      span.setAttribute('aria-hidden', 'true');
      span.style.setProperty('--i', i);
      span.textContent = c;
      return span;
    }),
  );
}
