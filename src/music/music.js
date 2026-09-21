const TUNE = [
  ['E6', 1], ['D6', 1], ['F#5', 2], ['G#5', 2],
  ['C#6', 1], ['B5', 1], ['D5', 2], ['E5', 2],
  ['B5', 1], ['A5', 1], ['C#5', 2], ['E5', 2],
  ['A5', 4], [null, 4],
];
const STEP = 0.14;
const SEMI = { C: -9, D: -7, E: -5, F: -4, G: -2, A: 0, B: 2 };

const hz = (note) => 440 * 2 ** ((SEMI[note[0]] + (note[1] === '#' ? 1 : 0) + (note.at(-1) - 4) * 12) / 12);

export function music(button) {
  const ctx = new AudioContext();
  const out = ctx.createGain();
  out.gain.value = 0.08;
  out.connect(ctx.destination);

  const beep = (note, at, len) => {
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    osc.type = 'square';
    osc.frequency.value = hz(note);
    env.gain.setValueAtTime(1, at);
    env.gain.exponentialRampToValueAtTime(0.01, at + len);
    osc.connect(env).connect(out);
    osc.start(at);
    osc.stop(at + len);
  };

  let at = ctx.currentTime + 0.05;
  const loop = () => {
    for (const [note, n] of TUNE) {
      if (note) beep(note, at, n * STEP * 0.9);
      at += n * STEP;
    }
    setTimeout(loop, (at - ctx.currentTime - 0.5) * 1000);
  };
  loop();

  button.hidden = false;
  button.addEventListener('click', () => {
    const on = ctx.state === 'running';
    on ? ctx.suspend() : ctx.resume();
    button.textContent = on ? 'BẬT NHẠC' : 'TẮT NHẠC';
  });
}
