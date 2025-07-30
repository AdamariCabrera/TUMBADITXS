// Guardar y cargar el banner y descripción
const banner = document.getElementById('banner');
const descripcion = document.getElementById('descripcion');

window.addEventListener('DOMContentLoaded', () => {
  // Cargar contenido
  if (localStorage.getItem('banner')) banner.innerText = localStorage.getItem('banner');
  if (localStorage.getItem('descripcion')) descripcion.innerText = localStorage.getItem('descripcion');

  // Cargar color de fondo
  const savedColor = localStorage.getItem('bgColor');
  if (savedColor) {
    document.body.style.setProperty('--bg-color', savedColor);
    document.getElementById('colorSelector').value = savedColor;
  }
});

[banner, descripcion].forEach(el => {
  el.addEventListener('input', () => {
    localStorage.setItem(el.id, el.innerText);
  });
});

// Selector de color de fondo
const colorSelector = document.getElementById('colorSelector');
colorSelector.addEventListener('input', () => {
  const color = colorSelector.value;
  document.body.style.setProperty('--bg-color', color);
  localStorage.setItem('bgColor', color);
});
