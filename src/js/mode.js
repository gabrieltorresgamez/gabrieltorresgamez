// Runs before first paint: picks desktop or stacked layout and whether to show the boot sequence.
(function () {
  var c = document.documentElement.classList;
  c.add('js');
  if (matchMedia('(min-width: 900px) and (min-height: 560px) and (pointer: fine)').matches) c.add('os');
  try {
    if (!sessionStorage.getItem('booted') && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sessionStorage.setItem('booted', '1');
      c.add('booting');
    }
  } catch (e) { /* storage blocked: skip the boot sequence */ }
  // If os.js failed to load or crashed, fall back to the stacked page so the content stays reachable.
  addEventListener('load', function () { if (!c.contains('ready')) c.remove('os'); });
})();
