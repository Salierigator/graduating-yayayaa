const START = 33.1;

export function music(button) {
  const audio = new Audio('./assets/the_ting_goes_jenny_sparks_remix.mp3');
  audio.loop = true;
  audio.addEventListener('loadedmetadata', () => (audio.currentTime = START), { once: true });

  const label = () => (button.textContent = audio.paused ? 'BẬT NHẠC' : 'TẮT NHẠC');
  audio.addEventListener('play', label);
  audio.addEventListener('pause', label);
  audio.play().catch(label);
  label();

  button.hidden = false;
  button.addEventListener('click', () => (audio.paused ? audio.play() : audio.pause()));
}
