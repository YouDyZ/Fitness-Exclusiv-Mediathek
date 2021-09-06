/**
 * TODO
 * -> Dataset in Datenbank
 */

/**
 * Declare all Variables
 */
const theme = localStorage.getItem('theme');
let jsEnabeld;

window.addEventListener('load', () => {
  const themeSwitch = document.getElementById('theme');
  body.classList.add(theme);
  jsEnabeld = document.getElementById('information-js');
  jsEnabeld.innerHTML = '';

  if (theme == 'light') {
    themeSwitch.innerHTML = 'Auf Dunklen Modus Wechseln';
  }

  //EVENT LISTENER

  themeSwitch.onclick = () => {
    if (themeSwitch.innerHTML == 'Auf Hellen Modus Wechseln') {
      themeSwitch.innerHTML = 'Auf Dunklen Modus Wechseln';
      body.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      themeSwitch.innerHTML = 'Auf Hellen Modus Wechseln';
      body.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  };
});
