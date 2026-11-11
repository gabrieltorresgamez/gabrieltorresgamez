// TORRES OS: window manager and terminal. The content lives in index.html; this only moves it around.
(function () {
  'use strict';

  var root = document.documentElement;
  var desk = document.getElementById('desk');
  var wins = Array.from(document.querySelectorAll('.win'));
  var osQuery = matchMedia('(min-width: 900px) and (min-height: 560px) and (pointer: fine)');
  var isOS = function () { return root.classList.contains('os'); };
  var iconFor = function (win) { return document.querySelector('.files a[href="#' + win.id + '"]'); };
  var z = 10;

  // ---- Windows ----
  function front(win) {
    wins.forEach(function (w) { w.classList.toggle('front', w === win); });
    win.style.zIndex = ++z;
  }

  function open(win, opts) {
    opts = opts || {};
    if (!isOS()) {
      win.scrollIntoView({ behavior: opts.instant ? 'instant' : 'auto' });
    } else {
      var wasOpen = win.classList.contains('open');
      // Keyboard-initiated opens and closes are instant; only pointer actions animate.
      win.classList.toggle('instant', !!opts.instant);
      win.classList.add('open');
      front(win);
      var icon = iconFor(win);
      if (icon) icon.setAttribute('aria-current', 'true');
      if (win.id === 'terminal') termBody.scrollTop = termBody.scrollHeight;
      if (!wasOpen && icon && !opts.instant) {
        // Grow from the window's icon, and shrink back to it on close.
        var r = win.getBoundingClientRect();
        var i = icon.getBoundingClientRect();
        win.style.transformOrigin = (i.left + i.width / 2 - r.left) + 'px ' + (i.top + i.height / 2 - r.top) + 'px';
      }
    }
    if (opts.focus !== false) (win.id === 'terminal' ? termIn : win).focus({ preventScroll: isOS() });
  }

  function close(win, instant) {
    win.classList.toggle('instant', !!instant);
    win.classList.remove('open', 'front');
    win.setMax(false);
    var icon = iconFor(win);
    if (icon) {
      icon.removeAttribute('aria-current');
      icon.focus();
    }
    var rest = wins.filter(function (w) { return w.classList.contains('open'); })
      .sort(function (a, b) { return b.style.zIndex - a.style.zIndex; });
    if (rest[0]) front(rest[0]);
  }

  document.querySelector('.files').addEventListener('click', function (e) {
    var a = e.target.closest('a');
    var win = a && document.getElementById(a.hash.slice(1));
    if (!win || !isOS()) return; // stacked page: let the anchor scroll
    e.preventDefault();
    open(win, { instant: e.detail === 0 }); // detail 0: activated with the keyboard
  });

  wins.forEach(function (win) {
    var bar = win.querySelector('.win-bar');
    var pos = { x: 0, y: 0 };

    win.addEventListener('pointerdown', function () { if (isOS()) front(win); });
    win.querySelector('.win-close').addEventListener('click', function (e) { close(win, e.detail === 0); });
    win.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOS()) close(win, true);
    });

    // Maximise: the button or a double-click on the title bar fills the desk; the same again restores.
    var maxBtn = win.querySelector('.win-max');
    var fileName = win.querySelector('.win-name').textContent;
    win.setMax = function (on) {
      win.classList.toggle('max', on);
      win.style.translate = on || !(pos.x || pos.y) ? '' : pos.x + 'px ' + pos.y + 'px';
      maxBtn.setAttribute('aria-label', (on ? 'Restore ' : 'Maximise ') + fileName);
      maxBtn.querySelector('use').setAttribute('href', on ? '#i-restore' : '#i-max');
      if (win.id === 'terminal') termBody.scrollTop = termBody.scrollHeight;
    };
    maxBtn.addEventListener('click', function () { win.setMax(!win.classList.contains('max')); });
    bar.addEventListener('dblclick', function (e) {
      if (isOS() && !e.target.closest('button')) win.setMax(!win.classList.contains('max'));
    });

    // Drag by the title bar. The offset goes straight onto `translate`, so opening (`scale`) stays independent.
    bar.addEventListener('pointerdown', function (e) {
      if (!isOS() || e.button !== 0 || e.target.closest('button') || win.classList.contains('dragging') || win.classList.contains('max')) return;
      var r = win.getBoundingClientRect();
      var d = desk.getBoundingClientRect();
      var start = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      // Keep the title bar reachable: never above the menu bar, never fully off a side.
      var min = { x: pos.x + d.left - r.right + 96, y: pos.y + d.top - r.top };
      var max = { x: pos.x + d.right - r.left - 96, y: pos.y + d.bottom - r.top - bar.offsetHeight };

      function move(ev) {
        pos.x = Math.min(max.x, Math.max(min.x, ev.clientX - start.x));
        pos.y = Math.min(max.y, Math.max(min.y, ev.clientY - start.y));
        win.style.translate = pos.x + 'px ' + pos.y + 'px';
      }
      function end() {
        win.classList.remove('dragging');
        bar.removeEventListener('pointermove', move);
        bar.removeEventListener('pointerup', end);
        bar.removeEventListener('pointercancel', end);
      }
      bar.setPointerCapture(e.pointerId);
      win.classList.add('dragging');
      bar.addEventListener('pointermove', move);
      bar.addEventListener('pointerup', end);
      bar.addEventListener('pointercancel', end);
    });

    win.resetPosition = function () {
      pos.x = pos.y = 0;
      win.setMax(false);
    };
  });

  // Switching between desktop and stacked layout (resize, rotate, plugging in a mouse).
  osQuery.addEventListener('change', function (e) {
    root.classList.toggle('os', e.matches);
    wins.forEach(function (w) { w.resetPosition(); });
    if (e.matches && !document.querySelector('.win.open')) { opened = false; openInitial(); }
  });

  // ---- Clock ----
  var clock = document.getElementById('clock');
  var clockFormat = new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  function tick() {
    var now = new Date();
    clock.dateTime = now.toISOString();
    clock.textContent = clockFormat.format(now).replace(',', '');
  }
  tick();
  setInterval(tick, 15000);

  // ---- Terminal ----
  var termOut = document.getElementById('term-out');
  var termIn = document.getElementById('term-in');
  var termBody = document.querySelector('#terminal .win-body');
  var PROMPT = 'guest@torres.swiss:~$ ';
  var LOGO = document.querySelector('.boot-logo').textContent.replace(/^\n/, '');
  var history = [];
  var historyAt = 0;

  function print(text, cls) {
    var line = document.createElement('div');
    if (cls) line.className = cls;
    line.textContent = text; // never innerHTML: this also echoes what the visitor typed
    termOut.appendChild(line);
    termBody.scrollTop = termBody.scrollHeight;
  }

  // Terminal rendering of a window, so the terminal and the desktop share one source.
  // Inline markup in the page maps to terminal colours: <mark> key terms, <b> organisations, dates.
  var spanClass = { MARK: 'hl', B: 'org' };
  function copyInline(src, dst) {
    src.childNodes.forEach(function (n) {
      if (n.nodeType === 3) return dst.appendChild(document.createTextNode(n.textContent.replace(/\s+/g, ' ')));
      if (n.nodeType !== 1) return;
      var cls = spanClass[n.tagName] || (n.classList.contains('now') ? 'now' : n.classList.contains('when') || n.classList.contains('yr') ? 'when' : '');
      var into = dst;
      if (cls) {
        into = dst.appendChild(document.createElement('span'));
        into.className = cls;
      }
      copyInline(n, into);
    });
  }

  function printFile(id) {
    document.getElementById(id).querySelectorAll('h2, h3, p, li:not(.actions li)').forEach(function (el) {
      if (!el.textContent.trim()) return;
      var line = document.createElement('div');
      var kind = el.classList.contains('meta') ? 'meta' : el.tagName.toLowerCase();
      var link = el.querySelector('a[href]');
      line.className = 't-' + kind;
      copyInline(el, line);
      line.normalize();
      if (line.firstChild.nodeType === 3) line.firstChild.textContent = line.firstChild.textContent.replace(/^\s+/, '');
      if (line.lastChild.nodeType === 3) line.lastChild.textContent = line.lastChild.textContent.replace(/\s+$/, '');
      if (kind === 'li') line.prepend('  - ');
      if (kind === 'meta') line.prepend('  ');
      if (link) {
        var url = line.appendChild(document.createElement('span'));
        url.className = 'url';
        url.textContent = '  ' + link.href.replace(/^mailto:/, '');
      }
      termOut.appendChild(line);
    });
    termBody.scrollTop = termBody.scrollHeight;
  }

  // Two-column listings (help, contact): the first column is coloured.
  function printPairs(rows, valueClass) {
    rows.forEach(function (row) {
      var line = document.createElement('div');
      var key = line.appendChild(document.createElement('span'));
      key.className = 'key';
      key.textContent = row[0].padEnd(14);
      var value = line.appendChild(document.createElement('span'));
      if (valueClass) value.className = valueClass;
      value.textContent = row[1];
      termOut.appendChild(line);
    });
    termBody.scrollTop = termBody.scrollHeight;
  }

  var files = { whoami: 'about', about: 'about', work: 'work', education: 'education', projects: 'projects', certificates: 'certificates' };
  var help = [
    ['whoami', 'about me'],
    ['work', 'my work experience'],
    ['education', 'my educational background'],
    ['projects', 'my projects'],
    ['certificates', 'my certificates'],
    ['contact', 'where to reach me'],
    ['privacy', 'open the privacy notice'],
    ['open <file>', 'open a file as a window, e.g. open work'],
    ['neofetch', 'system information'],
    ['clear', 'clear the screen'],
    ['exit', 'close the terminal']
  ];

  var commands = {
    help: function () { printPairs(help); },
    ls: function () { print('about.md  work.md  education.md  projects  certificates.md'); },
    contact: function () {
      printPairs([
        ['LinkedIn', 'https://www.linkedin.com/in/gabrieltorresgamez/'],
        ['Mail', 'mail@torres.swiss'],
        ['GitHub', 'https://github.com/gabrieltorresgamez'],
        ['Blog', 'https://fuet.ch']
      ], 'url');
    },
    open: function (arg) {
      var id = files[(arg || '').replace(/\.md$/, '')];
      if (!id) return print('open: no such file: ' + (arg || '') + '\nTry: open work', 'err');
      print('Opening ' + id + ' …');
      open(document.getElementById(id), { focus: !isOS(), instant: true });
      if (isOS()) front(document.getElementById('terminal')); // keep the prompt you are typing into on top
    },
    neofetch: function () {
      var d = new Date();
      print(LOGO, 'logo');
      print('TORRES OS ' + Math.floor(d.getFullYear() / 100) + '.' + d.getFullYear() % 100 + '.' + (d.getMonth() + 1) + ' LTS\nUptime: ' + Math.round(performance.now() / 1000) + 's\nUsers logged in: 1\n0 updates can be installed immediately.');
    },
    privacy: function () { location.href = 'privacy/'; },
    clear: function () { termOut.textContent = ''; },
    exit: function () {
      if (isOS()) close(document.getElementById('terminal'), true);
      else print('There is no escape on a phone. Scroll up instead.');
    }
  };
  commands.socials = commands.contact;
  commands.blog = commands.contact;
  commands.cat = commands.open;
  ['sudo', 'su', 'rm'].forEach(function (name) {
    commands[name] = function () {
      print(name + ': permission denied. This incident will be reported.', 'err');
      setTimeout(function () { location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; }, 1200);
    };
  });

  function run(input) {
    var parts = input.trim().split(/\s+/);
    var name = parts[0].toLowerCase();
    print(PROMPT + input, 'cmd');
    if (!name) return;
    if (files[name]) printFile(files[name]);
    else if (Object.prototype.hasOwnProperty.call(commands, name)) commands[name](parts[1] && parts[1].toLowerCase());
    else print('Command "' + name + '" not found. Type "help" for a list.', 'err');
  }

  document.getElementById('term-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var input = termIn.value;
    if (input.trim()) history.push(input);
    historyAt = history.length;
    termIn.value = '';
    run(input);
  });

  termIn.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      if (!history.length) return;
      e.preventDefault();
      historyAt = Math.min(history.length, Math.max(0, historyAt + (e.key === 'ArrowUp' ? -1 : 1)));
      termIn.value = history[historyAt] || '';
    } else if (e.key === 'Tab' && termIn.value.trim()) {
      // Complete only when there is something typed, so Tab still leaves an empty prompt.
      var matches = Object.keys(files).concat(Object.keys(commands)).filter(function (c) {
        return c.indexOf(termIn.value.trim().toLowerCase()) === 0;
      });
      e.preventDefault();
      if (matches.length === 1) termIn.value = matches[0];
      else if (matches.length > 1) print(matches.join('  '));
    }
  });

  // Clicking anywhere in the terminal focuses the prompt, unless the visitor is selecting text.
  termBody.addEventListener('click', function () {
    if (!String(getSelection())) termIn.focus({ preventScroll: true });
  });

  run('whoami');
  print('Type "help" for a list of commands.');

  // ---- Start ----
  var opened = false;
  function openInitial() {
    if (!isOS() || opened) return;
    opened = true;
    var about = document.getElementById('about');
    // The terminal only fits beside about.md on wide screens; elsewhere it waits behind its icon.
    if (!matchMedia('(min-width: 90rem)').matches) return open(about, { focus: false });
    open(document.getElementById('terminal'), { focus: false });
    setTimeout(function () { open(about, { focus: false }); }, 70);
  }

  if (root.classList.contains('booting')) {
    var boot = document.querySelector('.boot');
    var done = function () {
      if (!root.classList.contains('booting')) return;
      root.classList.remove('booting');
      removeEventListener('pointerdown', done);
      removeEventListener('keydown', done);
      openInitial();
    };
    // The windows start opening as the boot screen begins to fade, so the two overlap.
    boot.addEventListener('animationstart', function (e) { if (e.target === boot) openInitial(); });
    boot.addEventListener('animationend', function (e) { if (e.target === boot) done(); });
    addEventListener('pointerdown', done); // any click or key skips it
    addEventListener('keydown', done);
  } else {
    openInitial();
  }
  root.classList.add('ready'); // tells mode.js the window manager is running
})();
