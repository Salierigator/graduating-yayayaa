export function title() {
  let t = `${document.title}   `;
  setInterval(() => {
    t = t.slice(1) + t[0];
    document.title = t;
  }, 300);
}
