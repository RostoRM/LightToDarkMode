const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const secondLogo = document.getElementById('second_logo');
const mainLogo = document.getElementById('main_logo');
const hero = document.getElementById('hero');

//Dark or Light Images
const imageMode = (color, brightness, rgb, px) => {
  hero.style.backgroundImage = `url('./img/jungle_${color}.jpg')`;
  mainLogo.style.filter = brightness;
  secondLogo.style.backgroundColor = rgb;
  secondLogo.style.borderRadius = px;
};

// Toggle Dark Light Mode
const toggle = (isDark) => {
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  isDark
    ? imageMode('black', 'brightness(90%)', 'rgb(255 255 255 / 0.8)', '10px')
    : imageMode('light', 'brightness(100%)', 'rgb(245, 245, 245)', '0px');
};

//Switch Theme Dynamically
const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggle(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggle(false);
  }
};

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggle(true);
  }
}
