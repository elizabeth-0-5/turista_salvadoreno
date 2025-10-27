// Botón: mostrar mensaje
const btnMensaje = document.getElementById('btnMensaje');
btnMensaje?.addEventListener('click', () => {
  alert('El arte nos enseña a mirar el mundo con otros ojos 🎨✨');
});

// Botón: cambiar tema claro/oscuro (con memoria)
const btnTema = document.getElementById('btnTema');
const temaGuardado = localStorage.getItem('tema');
if (temaGuardado === 'dark') document.body.classList.add('dark');

btnTema?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('tema', document.body.classList.contains('dark') ? 'dark' : 'light');
  btnTema.textContent = document.body.classList.contains('dark') ? '🌞 Tema claro' : '🌗 Tema oscuro';
});

// Mensaje en consola (útil para clase)
console.log('Página cargada correctamente ✅');