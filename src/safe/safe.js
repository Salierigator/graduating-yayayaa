const KEY = 'safe';

function stored() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export function safe(button) {
  const root = document.documentElement;
  const saved = stored();
  const set = (on) => {
    root.classList.toggle('safe', on);
    button.textContent = on ? 'HẠI MẮT' : 'BẢO VỆ MẮT';
    try {
      localStorage.setItem(KEY, on ? '1' : '0');
    } catch { }
  };
  set(saved === null ? matchMedia('(prefers-reduced-motion: reduce)').matches : saved === '1');
  button.addEventListener('click', () => set(!root.classList.contains('safe')));
}
