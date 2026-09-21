export function envelope(el, onOpen) {
  el.addEventListener(
    'click',
    () => {
      onOpen();
      el.classList.add('boom');
      setTimeout(() => el.remove(), 600);
    },
    { once: true },
  );
}
