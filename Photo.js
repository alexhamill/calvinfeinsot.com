const stage = document.getElementById('stage');
const svg = document.getElementById('svg');
const line = document.getElementById('line');
const photos = document.querySelectorAll('.photo');

function buildPath() {
  const w = stage.clientWidth;
  const h = stage.clientHeight;
  let d = 'M 0 ' + h;

  for (let t = 0.01; t <= 1.0001; t += 0.01) {
    const x = t * w;
    const diagonal = h - t * h;
    const wiggle = Math.sin(t * Math.PI * 4) * Math.sin(t * Math.PI) * h * 0.2;
    d = d + ' L ' + x + ' ' + (diagonal + wiggle);
  }

  svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
  line.setAttribute('d', d);

  for (const photo of photos) {
    photo.style.offsetPath = "path('" + d + "')";
  }
}

window.onresize = buildPath;
buildPath();