import { envelope } from './envelope/envelope.js';
import { dialog } from './dialog/dialog.js';
import { rainbow } from './rainbow/rainbow.js';
import { trail } from './trail/trail.js';
import { swap } from './swap/swap.js';
import { counter } from './counter/counter.js';
import { music } from './music/music.js';
import { safe } from './safe/safe.js';
import { title } from './title/title.js';

const $ = (s) => document.querySelector(s);

safe($('#safe'));
trail();
title();

envelope($('#envelope'), () => {
  music($('#music'));
  $('#page').hidden = false;
  document.querySelectorAll('.rainbow').forEach(rainbow);
  counter($('#counter .counter-digits'));
  swap($('#yes'), $('#no'));
  setTimeout(() => dialog('Chúc mừng!', 'Bạn là người may mắn thứ 1.000.000 được mời dự lễ tốt nghiệp của tôi. Bấm OK để được gặp tôi.'), 700);
});

$('#yes').addEventListener('click', () => dialog('Thông báo', 'Yêu bạn nhất đó <3 <3 😘 💋 Hẹn gặp bạn ngày 27/09 nhé 🌹 &lt;3'));
