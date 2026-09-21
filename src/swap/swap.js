export function swap(yes, no) {
  let type = 'mouse';
  const flip = () => (no.previousElementSibling === yes ? no.after(yes) : yes.after(no));
  no.addEventListener('pointerdown', (e) => (type = e.pointerType));
  no.addEventListener('pointerenter', (e) => e.pointerType === 'mouse' && flip());
  no.addEventListener('click', (e) => (e.detail === 0 || type !== 'mouse') && flip());
}
