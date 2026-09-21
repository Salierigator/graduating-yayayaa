const TAUNTS = ['KHÔNG :((', 'Không đến thật hả :((', 'Bấm có đi mà 🥀', 'Hic :((', 'Thôi mà 🥀', 'Ko được đâu', 'Bấm CÓ đi 😭😭', 'T buồn lắm đó :((', 'Cô đơn quá 💔'];

export function runaway(el) {
  let n = 0;
  const flee = (e) => {
    e.preventDefault();
    el.textContent = TAUNTS[++n % TAUNTS.length];
    el.style.position = 'fixed';
    el.style.margin = '0';
    const r = el.getBoundingClientRect();
    el.style.left = `${Math.random() * (innerWidth - r.width)}px`;
    el.style.top = `${Math.random() * (innerHeight - r.height)}px`;
  };
  el.addEventListener('pointerenter', flee);
  el.addEventListener('click', flee);
}
