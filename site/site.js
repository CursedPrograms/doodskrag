// ENTER splash: tears itself apart when you click anywhere, press a key, or after a few seconds.
const splash = document.getElementById("splash");
function enter() {
  if (!splash.isConnected || splash.classList.contains("gone")) return;
  splash.classList.add("gone");
  setTimeout(() => splash.remove(), 500);
}
splash.addEventListener("click", enter);
addEventListener("keydown", enter, { once: true });
setTimeout(enter, 6000);

const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Video switch: YouTube (Alleen) or the band's own file (Dood en Bevrediging).
// Hiding the YouTube frame doesn't stop it, so blank its src and restore it on the way back.
const yt = document.getElementById("yt");
const local = document.getElementById("local");
const ytSrc = yt.src;
const videoTitle = document.getElementById("video-title");
document.querySelectorAll(".tabs button").forEach(tab => tab.addEventListener("click", () => {
  document.querySelectorAll(".tabs button").forEach(t => t.classList.toggle("on", t === tab));
  videoTitle.textContent = tab.dataset.title;
  const showYt = tab.dataset.show === "yt";
  yt.hidden = !showYt;
  local.hidden = showYt;
  if (showYt) {
    local.pause();
    if (yt.src !== ytSrc) yt.src = ytSrc;
  } else {
    yt.src = "about:blank";
    local.play().catch(() => {});
  }
}));

// Every so often the whole page tears for a frame or two, like a bad VHS.
function tear() {
  document.body.classList.add("tear");
  setTimeout(() => document.body.classList.remove("tear"), 60 + Math.random() * 120);
  setTimeout(tear, 3000 + Math.random() * 6000);
}
if (!calm) setTimeout(tear, 4000);

// Visitor counter that only ever creeps up from 666.
const counter = document.getElementById("counter");
let visits = 666;
function tick() {
  visits += Math.floor(Math.random() * 3);
  counter.textContent = String(visits).padStart(6, "0");
  setTimeout(tick, 2000 + Math.random() * 4000);
}
tick();

// Title bars scramble into noise and back, the old Doodskrag text effect.
const noise = "!<>-_\\/[]{}—=+*^?#⛧▓▒░";
function scramble(el) {
  const text = el.textContent;
  let frame = 0;
  const run = () => {
    el.textContent = [...text].map((c, i) =>
      c === " " || frame > i * 1.5 ? c : noise[Math.floor(Math.random() * noise.length)]).join("");
    if (frame++ < text.length * 1.5) requestAnimationFrame(run);
    else el.textContent = text;
  };
  run();
}
if (!calm) {
  const bars = [...document.querySelectorAll(".bar")].filter(b => !b.children.length);
  setInterval(() => scramble(bars[Math.floor(Math.random() * bars.length)]), 4000);
}
