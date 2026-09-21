export function dialog(title, text) {
  const el = document.createElement('div');
  el.className = 'dialog';
  el.innerHTML = `
    <div class="dialog-box" role="alertdialog" aria-label="${title}">
      <div class="dialog-title">${title}<button class="btn" type="button" aria-label="Đóng">x</button></div>
      <div class="dialog-body"><span class="dialog-icon">!</span><p>${text}</p></div>
      <button class="btn dialog-ok" type="button">OK</button>
    </div>`;
  el.addEventListener('click', (e) => e.target.closest('button') && el.remove());
  document.body.append(el);
  el.querySelector('.dialog-ok').focus();
}
