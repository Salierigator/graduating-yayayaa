export function counter(el) {
  let n = 1000000 + Math.floor(Math.random() * 8000000);
  const render = () => {
    el.textContent = String(n).padStart(7, '0');
  };
  render();
  setInterval(() => {
    n += 1 + Math.floor(Math.random() * 3);
    render();
  }, 1500);
}
