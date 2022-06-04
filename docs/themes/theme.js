const fallback = 'dark';
const theme = localStorage.getItem('theme') || fallback;
document.getElementById('theme').href = `/themes/${theme}.css`;
