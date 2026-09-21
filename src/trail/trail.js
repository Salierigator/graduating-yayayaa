const GLYPHS = ['*', '+', '.', '*', '★'];
const COLORS = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#ff00ff', '#ffffff'];
const MAX = 40;
const BURST = 10;

const pick = (a) => a[Math.floor(Math.random() * a.length)];

export function trail() {
  let alive = 0;
  const spark = (x, y) => {
    if (alive >= MAX || document.documentElement.classList.contains('safe')) return;
    const el = document.createElement('span');
    el.className = 'spark';
    el.textContent = pick(GLYPHS);
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.color = pick(COLORS);
    alive++;
    el.addEventListener('animationend', () => {
      el.remove();
      alive--;
    });
    document.body.append(el);
  };
  addEventListener('pointermove', (e) => spark(e.clientX, e.clientY));
  addEventListener('pointerdown', (e) => {
    for (let i = 0; i < BURST; i++) spark(e.clientX + (Math.random() - 0.5) * 80, e.clientY + (Math.random() - 0.5) * 80);
  });
}
